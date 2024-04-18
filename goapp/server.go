package main

import (
	"log"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"goapp/internal/handler"
	"goapp/internal/repository"
)

func main() {
	db, err := repository.OpenDataBase("DB_NAME")
    if err != nil {
        log.Fatalf("Failed to connect to the database: %v", err)
    } else {
        fmt.Println("Successfully connected to the database")
    }

	r := gin.Default()

	// 初始化cors中间件
	corsMiddleware := cors.New(
		cors.Config{
			AllowAllOrigins:  true,
			AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
			AllowHeaders:     []string{"Content-Type", "Authorization"},
			AllowCredentials: true,
		},
	)

	// 使用cors中间件
	r.Use(corsMiddleware)
	//r.Static("/", "./static")
	r.POST("/register", handler.RegisterHandler(db))
	r.POST("/login", handler.LogInHandler(db))
	r.POST("/python", handler.RunPythonHandler)
	r.Run(":8080")
}