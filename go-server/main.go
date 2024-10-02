package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/lib/pq"
	"github.com/rs/cors"
	"golang.org/x/crypto/bcrypt"
)

var db *sql.DB

func init() {
    var err error
    connStr := "user=admin dbname=stylzdb sslmode=disable host=localhost port=5432 password=admin"
    db, err = sql.Open("postgres", connStr)
    if err != nil {
        log.Fatal("Error connecting to the database:", err)
    }

    err = db.Ping()
    if err != nil {
        log.Fatal("Error pinging the database:", err)
    }
}

func createUserTable() {
    query := `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(80) NOT NULL,
        confirm_password VARCHAR(80) NOT NULL
    );`
    _, err := db.Exec(query)
    if err != nil {
        log.Fatal("Error creating users table:", err)
    }
}

func createUser(fullName, email, password, confirmPassword string) error {
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
    if err != nil {
        log.Println("Error hashing password:", err)
        return err
    }

    hashedConfirmPassword, err := bcrypt.GenerateFromPassword([]byte(confirmPassword), bcrypt.DefaultCost)
    if err != nil {
        log.Println("Error hashing confirm password:", err)
        return err
    }

    query := `INSERT INTO users (full_name, email, password, confirm_password) VALUES ($1, $2, $3, $4) RETURNING id`
    var id int
    err = db.QueryRow(query, fullName, email, string(hashedPassword), string(hashedConfirmPassword)).Scan(&id)
    if err != nil {
        log.Println("Error inserting user into database:", err)
        return err
    }
    log.Printf("New user ID: %d\n", id)
    return nil
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
    var user struct {
        FullName        string `json:"full_name"`
        Email           string `json:"email"`
        Password        string `json:"password"`
        ConfirmPassword string `json:"confirm_password"`
    }

    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, "Error parsing request body", http.StatusBadRequest)
        log.Println("Error parsing request body:", err)
        return
    }

    if user.Password != user.ConfirmPassword {
        http.Error(w, "Passwords do not match", http.StatusBadRequest)
        return
    }

    err = createUser(user.FullName, user.Email, user.Password, user.ConfirmPassword)
    if err != nil {
        http.Error(w, "Error creating user", http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
    w.Write([]byte("User registered successfully"))
}

func main() {
    createUserTable()

    http.HandleFunc("/register", registerHandler)
    handler := cors.Default().Handler(http.DefaultServeMux)
    
    log.Println("Server running on port 8080")
    log.Fatal(http.ListenAndServe(":8080", handler))
}