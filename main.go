// main.go

package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/jinzhu/gorm"
    _ "github.com/jinzhu/gorm/dialects/sqlite"
)

// Initialize database connection
var db *gorm.DB

func main() {
    // Connect to SQLite database
    var err error
    db, err = gorm.Open("sqlite3", "ecommerce.db")
    if err != nil {
        panic("failed to connect database")
    }
    defer db.Close()

    // Auto migrate the models
    db.AutoMigrate(&User{}, &Item{}, &Cart{}, &Order{})

    // Initialize Gin router
    router := gin.Default()

    // Define routes
    router.POST("/users", createUser)
    router.POST("/users/login", loginUser)
    router.GET("/users", listUsers)

    router.POST("/items", createItem)
    router.GET("/items", listItems)

    router.POST("/carts", createCart)
    router.GET("/carts", listCarts)

    router.POST("/orders", createOrder)
    router.GET("/orders", listOrders)

    // Start server
    router.Run(":8080")
}

// Define API handlers here
