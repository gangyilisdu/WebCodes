package testing

import (
	"fmt"
	"io"
	"log"
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
	"github.com/stretchr/testify/assert"
	"github.com/gin-gonic/gin"
	"goapp/internal/repository"
	"goapp/internal/handler"
)

func TestRegisterHandler(t *testing.T) {
    db, err := repository.OpenDataBase("DB_NAME")
    if err != nil {
        log.Fatalf("Failed to connect to the database: %v", err)
    } else {
        fmt.Println("Successfully connected to the database")
    }

	// 准备测试数据
	validUserData := map[string]string{
		"username": "test_validuser",
		"password": "strongpassword",
	}
	validRequestBody, _ := json.Marshal(validUserData)

	// 创建测试服务器
	r := gin.Default()
	r.POST("./register", handler.RegisterHandler(db))
	
	// 定义测试用例
	tests := []struct {
		name         string
		requestBody  []byte
		expectedCode int
		expectedBody string
	}{
		{
			name:         "ValidRegistration",
			requestBody:  validRequestBody,
			expectedCode: http.StatusCreated,
			expectedBody: `"message":"User registered successfully"`,
		},
		{
			name:         "ExistingUsername",
			requestBody:  validRequestBody,
			expectedCode: http.StatusConflict,
			expectedBody: `"error":"Username already exists"`,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// 发起请求并检查响应
			req := httptest.NewRequest(http.MethodPost, "/register", bytes.NewReader(tt.requestBody))
			req.Header.Set("Content-Type", "application/json")
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			resp := w.Result()
			defer resp.Body.Close()

			assert.Equal(t, tt.expectedCode, resp.StatusCode, "Unexpected status code")
			body, _ := io.ReadAll(resp.Body)
			assert.Contains(t, string(body), tt.expectedBody, "Unexpected response body")
		})
	}
	// // 在所有测试用例执行完毕后，清理测试数据
	// t.Cleanup(func() {
	// 	var testUsers []model.Users
	// 	db.Where("username LIKE ?", "test_%").Find(&testUsers) // 查找以"test_"开头的用户名，假定它们是测试数据
	// 	for _, user := range testUsers {
	// 		db.Delete(&user) // 删除测试用户
	// 	}
	// })
}