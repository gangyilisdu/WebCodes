package repository

import (
	"os"
	"fmt"
	"gorm.io/gorm"
    "gorm.io/driver/mysql"
	"goapp/internal/model"
)

type UserRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (ur *UserRepository) CreateUser(user *model.Users) error {
	return ur.db.Create(&user).Error
}

func (ur *UserRepository) QueryUser(queryParams interface{}, args ...interface{}) (model.Users, error) {
	var user model.Users
	// 使用 queryParams 进行条件查询
	err := ur.db.Where(queryParams, args...).First(&user).Error
	return user, err
}

func OpenDataBase(DB_NAME string) (*gorm.DB, error) {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv(DB_NAME)

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=true", dbUser, dbPassword, dbHost, dbPort, dbName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	return db, err
}