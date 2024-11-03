package types

import (
	"errors"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type RegisterUser struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	FullName string `json:"full_name"`
}

type User struct {
	Email        string `json:"email"`
	PasswordHash string `json:"password"`
	FullName     string `json:"full_name"`
}

func NewUser(registerUser RegisterUser) (User, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(registerUser.Password), 10)
	if err != nil {
		return User{}, err
	}

	return User{
		Email:        registerUser.Email,
		PasswordHash: string(hashedPassword),
		FullName:     registerUser.FullName,
	}, nil
}

func ValidatePassword(hashedPassword, plainTextPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(plainTextPassword))
	return err == nil
}

func CreateToken(user User) (string, error) {
	now := time.Now()
	validUntil := now.Add(time.Hour * 2).Unix()

	claims := jwt.MapClaims{
		"email":   user.Email,
		"expires": validUntil,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims, nil)
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		return "", errors.New("JWT_SECRET is not set")
	}

	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", errors.New("Failed to sign token")
	}

	return tokenString, nil
}
