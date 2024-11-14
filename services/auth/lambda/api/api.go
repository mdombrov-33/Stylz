package api

import (
	"encoding/json"
	"fmt"
	"lambda-func/database"
	"lambda-func/types"
	"net/http"
	"regexp"

	"github.com/aws/aws-lambda-go/events"
)

var allowedOrigins = map[string]bool{
	"http://localhost:5173":       true, // dev frontend
	"https://stylzmc.netlify.app": true, // production
}

type ApiHandler struct {
	// when we call api functions, we want to interact with the database
	dbStore database.UserStore
}

func NewApiHandler(dbStore database.UserStore) ApiHandler {
	return ApiHandler{
		dbStore: dbStore,
	}
}

func getAllowedOrigin(request events.APIGatewayProxyRequest) string {
	origin := request.Headers["origin"] // origin should start with small letter
	fmt.Println("Origin: ", origin)
	fmt.Println("All headers", request.Headers)
	if allowedOrigins[origin] {
		return origin
	}

	return "https://stylzmc.netlify.app"
}

func (api ApiHandler) RegisterUserHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var registerUser types.RegisterUser
	allowedOrigin := getAllowedOrigin(request)

	err := json.Unmarshal([]byte(request.Body), &registerUser)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "Invalid Request",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	if registerUser.Email == "" || registerUser.Password == "" || registerUser.FullName == "" {
		return events.APIGatewayProxyResponse{
			Body:       "Invalid request - fields empty",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	if len(registerUser.Password) < 8 {
		return events.APIGatewayProxyResponse{
			Body:       "Password must be at least 8 characters",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	if len(registerUser.Password) > 64 {
		return events.APIGatewayProxyResponse{
			Body:       "Password must be at most 64 characters",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	// check if email is valid
	emailRegex := regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
	if !emailRegex.MatchString(registerUser.Email) {
		return events.APIGatewayProxyResponse{
			Body:       "Invalid email format",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, nil
	}

	// does a user with this email already exist?
	userExists, err := api.dbStore.DoesUserExist(registerUser.Email)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "Internal Server Error",
			StatusCode: http.StatusInternalServerError,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	if userExists {
		return events.APIGatewayProxyResponse{
			Body:       "User with this email already exists",
			StatusCode: http.StatusConflict,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, nil
	}

	user, err := types.NewUser(registerUser)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "Internal Server Error",
			StatusCode: http.StatusInternalServerError,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, fmt.Errorf("error creating user: %w", err)
	}

	// we know that a user does not exists
	// insert the user into the database
	err = api.dbStore.InsertUser(user)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "Internal Server Error",
			StatusCode: http.StatusInternalServerError,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, fmt.Errorf("error inserting user: %w", err)
	}

	return events.APIGatewayProxyResponse{
		Body:       fmt.Sprintf(`{"full_name": "%s", "email": "%s", "message": "Registration successful!"}`, user.FullName, user.Email),
		StatusCode: http.StatusCreated,
		Headers: map[string]string{
			"Access-Control-Allow-Origin": allowedOrigin,
			"Content-Type":                "application/json",
		},
	}, nil
}

////////////////////////

func (api ApiHandler) LoginUser(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	type LoginRequest struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	var loginRequest LoginRequest
	allowedOrigin := getAllowedOrigin(request)

	err := json.Unmarshal([]byte(request.Body), &loginRequest)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "Invalid Request",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	user, err := api.dbStore.GetUser(loginRequest.Email)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "Internal Server Error",
			StatusCode: http.StatusInternalServerError,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, err
	}

	if !types.ValidatePassword(user.PasswordHash, loginRequest.Password) {
		return events.APIGatewayProxyResponse{
			Body:       "Invalid credentials",
			StatusCode: http.StatusBadRequest,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, nil
	}

	accessToken, err := types.CreateToken(user)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       fmt.Sprintf(`{"error": "Failed to create token: %s"}`, err.Error()),
			StatusCode: http.StatusInternalServerError,
			Headers: map[string]string{
				"Access-Control-Allow-Origin": allowedOrigin,
			},
		}, nil
	}

	return events.APIGatewayProxyResponse{
		Body:       fmt.Sprintf(`{"full_name": "%s", "email": "%s", "access_token": "%s"}`, user.FullName, user.Email, accessToken),
		StatusCode: http.StatusOK,
		Headers: map[string]string{
			"Access-Control-Allow-Origin": allowedOrigin,
			"Content-Type":                "application/json",
		},
	}, nil
}
