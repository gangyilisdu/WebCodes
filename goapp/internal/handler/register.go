package handler

import (
    "strings"
    "net/http"
    "gorm.io/gorm"
	"goapp/internal/model"
	"goapp/internal/repository"
    "golang.org/x/crypto/bcrypt"
	"github.com/gin-gonic/gin"
)

func RegisterHandler(db *gorm.DB) gin.HandlerFunc {
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

        hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
            return
        }

        newUser := model.Users{
            Username: req.Username,
            Password: string(hashedPassword),
        }

        if err := userRepo.CreateUser(&newUser); err != nil {
            if strings.Contains(err.Error(), "unique constraint") || strings.Contains(err.Error(), "Duplicate entry") {
                c.JSON(http.StatusConflict, gin.H{"error": "Username already exists"})
            } else {
                c.JSON(http.StatusInternalServerError, gin.H{"error": "An unexpected error occurred"})
            }
            return
        }

        c.JSON(http.StatusCreated, gin.H{"message": "User registered successfully"})
    }
}