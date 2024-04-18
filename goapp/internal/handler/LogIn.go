package handler

import (
    "net/http"
    "errors"
    "gorm.io/gorm"
	"goapp/internal/model"
	"goapp/internal/repository"
    "golang.org/x/crypto/bcrypt"
	"github.com/gin-gonic/gin"
)

func LogInHandler(db *gorm.DB) gin.HandlerFunc {
    userRepo := repository.NewUserRepository(db)

    return func(c *gin.Context) {
        var req struct {
            Username string `json:"username" binding:"required,min=3,max=25"`
            Password string `json:"password" binding:"required,min=6,max=72"`
        }

        if err := c.ShouldBindJSON(&req); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }

        var user model.Users

        // 查询用户是否存在
        user, err := userRepo.QueryUser("username = ?", req.Username)
        if err != nil {
            if errors.Is(err, gorm.ErrRecordNotFound) {
                c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
            } else {
                c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to query user"})
            }
            return
        }

        // 验证密码
        if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect Password"})
            return
        }

        c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
    }
}
