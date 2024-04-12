// models.go

package main

import "github.com/jinzhu/gorm"

// Define models
type User struct {
    gorm.Model
    Username string `gorm:"unique"`
    Password string
}

type Item struct {
    gorm.Model
    Name  string
    Price float64
}

type Cart struct {
    gorm.Model
    UserID uint
    Items  []Item `gorm:"many2many:cart_items;"`
}

type Order struct {
    gorm.Model
    UserID uint
    CartID uint
}
