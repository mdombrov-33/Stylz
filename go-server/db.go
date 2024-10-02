package main


import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var db *sql.DB

func initDB() {
    var err error
    connStr := "user=yourusername dbname=yourdbname sslmode=disable password=yourpassword"
    db, err = sql.Open("postgres", connStr)
    if err != nil {
        log.Fatal("Error connecting to the database:", err)
    }

    err = db.Ping()
    if err != nil {
        log.Fatal("Error pinging the database:", err)
    }

    fmt.Println("Successfully connected to the database")
}

func createUserTable() {
    query := `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        full_name VARCHAR(100) NOT NULL
    );`
    _, err := db.Exec(query)
    if err != nil {
        log.Fatal("Error creating users table:", err)
    }
}