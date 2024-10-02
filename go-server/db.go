package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var db *sql.DB

func init() {
    var err error
    connStr := "user=admin dbname=stylzdb sslmode=disable host=localhost port=3000 password=admin"
    db, err = sql.Open("postgres", connStr)
    if err != nil {
        log.Fatal(err)
    }
}

func createUserTable() {
    query := `
    CREATE TABLE IF NOT EXISTS users (
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        confirm_password VARCHAR(50) NOT NULL
    );`
    _, err := db.Exec(query)
    if err != nil {
        log.Fatal("Error creating users table:", err)
    }
}

func createUser(fullName, email, password, confirmPassword string) {
    query := `INSERT INTO users (full_name, email, password, confirm_password) VALUES ($1, $2, $3, $4) RETURNING id`
    var id int
    err := db.QueryRow(query, fullName, email, password, confirmPassword).Scan(&id)
    if err != nil {
        log.Fatal("Error inserting new user:", err)
    }
    fmt.Printf("New user ID: %d\n", id)
}


func getAllUsers() ([]User, error) {
    query := `SELECT full_name, email FROM users`
    rows, err := db.Query(query)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var users []User
    for rows.Next() {
        var user User
        err := rows.Scan(&user.FullName, &user.Email)
        if err != nil {
            return nil, err
        }
        users = append(users, user)
    }

    if err = rows.Err(); err != nil {
        return nil, err
    }

    return users, nil
}


func getUserByID(id int) {
    query := `SELECT id, full_name, email FROM users WHERE id = $1`
    var user struct {
        ID       int
        FullName string
        Email    string
    }
    err := db.QueryRow(query, id).Scan(&user.ID, &user.FullName, &user.Email)
    if err != nil {
        if err == sql.ErrNoRows {
            fmt.Println("No user found with the given ID")
        } else {
            log.Fatal("Error retrieving user:", err)
        }
    } else {
        fmt.Printf("User: %+v\n", user)
    }
}