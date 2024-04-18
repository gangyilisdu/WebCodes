package handler

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"net/http"
	"time"
	"log"
	"regexp"

	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/gin-gonic/gin"
)

const maxPythonCodeLength = 1000
const containerExecutionTimeout = 10 * time.Second


func filterControlChars(logs string) string {
	controlCharPattern := regexp.MustCompile("[\x00-\x08\x0B\x0C\x0E-\x1F]+")
    return controlCharPattern.ReplaceAllString(logs, "")
}



func RunPythonHandler(c *gin.Context) {

	cli, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Failed to create Docker client: %v", err),
		})
		return
	}
	defer cli.Close()

	var req struct {
		PythonCode string `json:"pythonCode"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": fmt.Sprintf("Invalid Python Code: %v", err),
		})
		return
	}

	if len(req.PythonCode) > maxPythonCodeLength {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": fmt.Sprintf("Python code exceeds the maximum allowed length (%d characters)", maxPythonCodeLength),
		})
		return
	}

	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, containerExecutionTimeout)
	defer cancel()

	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image: "python:3.10",
		Cmd:   []string{"python", "-c", req.PythonCode},
		Tty:   false,
	}, nil, nil, nil, "")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Failed to create Docker container: %v", err),
		})
		return
	}

	if err := cli.ContainerStart(ctx, resp.ID, container.StartOptions{}); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Failed to start Docker container: %v", err),
		})
		return
	}

	StatusCh, errCh := cli.ContainerWait(ctx, resp.ID, container.WaitConditionNotRunning)
	select {
	case err := <-errCh:
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Error waiting for Docker container: %v", err),
		})
		return
	case status := <-StatusCh:
		if status.StatusCode != 0 {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": fmt.Sprintf("Python script exited with non-zero status code: %d", status.StatusCode),
			})
			return
		}
	case <-ctx.Done():
		// Container execution timed out
		cli.ContainerKill(ctx, resp.ID, "SIGINT") // Send SIGINT to interrupt the Python process
		c.JSON(http.StatusRequestTimeout, gin.H{
			"error": "Python script execution timed out",
		})
		return
	}

	// Retrieve the container logs
	logs, err := cli.ContainerLogs(ctx, resp.ID, container.LogsOptions{
		ShowStdout: true,
		ShowStderr: false,
		Follow:     false,
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Failed to retrieve Docker container logs: %v", err),
		})
		return
	}
	defer logs.Close()

	// Read the logs into a buffer
	var logBuf bytes.Buffer
	logBuf.Reset()
	if _, err := io.Copy(&logBuf, logs); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Failed to read Docker container logs: %v", err),
		})
		return
	}
	fmt.Println(logBuf.String())
	filteredOutput := filterControlChars(logBuf.String())
	// Send the logs as the response
	c.JSON(http.StatusOK, gin.H{"output": filteredOutput})

	if err := cli.ContainerRemove(ctx, resp.ID, container.RemoveOptions{Force: true}); err != nil {
		// 可选：记录日志或发出警告，但不影响主逻辑，因为主要任务已经完成
		log.Printf("Failed to remove Docker container %s: %v", resp.ID, err)
	}
}