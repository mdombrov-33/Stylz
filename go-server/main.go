package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type User struct {
    Username string `json:"username"`
    Password string `json:"password"`
    FullName string `json:"full_name"`
}

// CORS Middleware
func corsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        // Handle preflight request
        if r.Method == http.MethodOptions {
            w.WriteHeader(http.StatusOK)
            return
        }

        next.ServeHTTP(w, r)
    })
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
        return
    }

    var user User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, "Error parsing request body", http.StatusBadRequest)
        return
    }

    // Login logic
    fmt.Fprintf(w, "Login successful for user: %s", user.Username)
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
        return
    }

    var user User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, "Error parsing request body", http.StatusBadRequest)
        return
    }

    // Registration logic
    fmt.Fprintf(w, "Registration successful for user: %s", user.FullName)
}

func main() {
    http.Handle("/login", corsMiddleware(http.HandlerFunc(loginHandler)))
    http.Handle("/register", corsMiddleware(http.HandlerFunc(registerHandler)))

    fmt.Println("Server is running on port 3000")
    err := http.ListenAndServe(":3000", nil)
    if err != nil {
        log.Fatal("Error starting server:", err)
    }
}