package model
import "time"

type Users struct  {
	ID		 uint   `gorm:"primary_key"`
	Username string `gorm:"unqiue;not null"`
	Password string `gorm:"not null"`
	CreatedAt time.Time
	UpdatedAt time.Time
}