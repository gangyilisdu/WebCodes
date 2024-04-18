package testing

import (
	"log"
	"fmt"
	"io"
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
	"github.com/stretchr/testify/assert"
	"github.com/gin-gonic/gin"
	"goapp/internal/handler"
	"goapp/internal/repository"
)

func TestLoginInHandler(t *testing.T) {
	// 打开数据库并建立实例
	db, err := repository.OpenDataBase("DB_NAME")
    if err != nil {
        log.Fatalf("Failed to connect to the database: %v", err)
    } else {
        fmt.Println("Successfully connected to the database")
    }
	
	// 准备测试数据
	existUserData := map[string]string {
		"username": "test_validuser",
		"password": "strongpassword",
	}
	existUserRequestBody, _ := json.Marshal(existUserData)

	passWrongUserData := map[string]string {
		"username": "test_validuser1",
		"password": "secondpassword",
	}
	passWrongRequestBody, _ := json.Marshal(passWrongUserData)

	NotExistedUserData := map[string]string {
		"username": "test_validuser2",
		"password": "thirdpassword",
	}
	NotExistedUserRequestBody, _ := json.Marshal(NotExistedUserData)

	// 创建测试服务器
	r := gin.Default()
	r.POST("/login", handler.LogInHandler(db))

	// 定义测试用例
	tests := []struct {
		name         string
		requestBody  []byte
		expectedCode int
		expectedBody string
	}{
		{
			name:         "SuccessLogin",
			requestBody:  existUserRequestBody,
			expectedCode: http.StatusOK,
			expectedBody: `"message":"Login successful"`,
		},
		{
			name:         "PasswordWrong",
			requestBody:  passWrongRequestBody,
			expectedCode: http.StatusUnauthorized,
			expectedBody: `"error":"Incorrect Password"`,
		},
		{
			name:         "NotExistUsername",
			requestBody:  NotExistedUserRequestBody,
			expectedCode: http.StatusNotFound,
			expectedBody: `"error":"User not found"`,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// 发起请求并检查响应
			req := httptest.NewRequest(http.MethodPost, "/login", bytes.NewReader(tt.requestBody))
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
	// 	var testUsers []model.User
	// 	db.Where("username LIKE ?", "test_%").Find(&testUsers) // 查找以"test_"开头的用户名，假定它们是测试数据
	// 	for _, user := range testUsers {
	// 		db.Delete(&user) // 删除测试用户
	// 	}
	// })
}