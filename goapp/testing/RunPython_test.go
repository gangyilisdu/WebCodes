package testing

import (
	"bytes"
	"encoding/json"
	"net/http"
	"testing"
	"net/http/httptest"

	"github.com/docker/docker/client"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	
	"goapp/internal/handler"
)

func TestRunPythonHandler_RealDocker(t *testing.T) {
	t.Parallel()

	cli, err := client.NewClientWithOpts(client.FromEnv)
	require.NoError(t, err)
	defer cli.Close()

	tests := []struct {
		name                 string
		pythonCode           string
		expectedStatusCode   int
		expectedResponseBody map[string]interface{}
	}{
		{
			name:           "Successful execution",
			pythonCode:     "print('Hello, World')",
			expectedStatusCode:   http.StatusOK,
			expectedResponseBody: map[string]interface{}{"output": "Hello, World"},
		},
		// Add more test cases here, if desired
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			body, err := json.Marshal(map[string]string{"pythonCode": tt.pythonCode})
			require.NoError(t, err)

			req := httptest.NewRequest(http.MethodPost, "/run-python", bytes.NewReader(body))
			w := httptest.NewRecorder()

			router := gin.Default()
			router.POST("/run-python", handler.RunPythonHandler)
			router.ServeHTTP(w, req)

			assert.Equal(t, tt.expectedStatusCode, w.Code)
			actualResponseBody := make(map[string]interface{}) 
			require.NoError(t, json.Unmarshal(w.Body.Bytes(), &actualResponseBody)) 

			assert.Equal(t, tt.expectedResponseBody, actualResponseBody) 
		})
	}
}