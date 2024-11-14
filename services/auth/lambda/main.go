package main

import (
	"fmt"
	"lambda-func/app"
	"lambda-func/middleware"
	"net/http"

	"github.com/aws/aws-lambda-go/events" // allows us to extract paths, requests etc.
	"github.com/aws/aws-lambda-go/lambda"
)

type MyEvent struct {
	Email string `json:"email"`
}

// * Take in a payload and do something with it
func HandleRequest(event MyEvent) (string, error) {
	if event.Email == "" {
		return "", fmt.Errorf("email is empty")
	}

	return fmt.Sprintf("Successfully called by - %s", event.Email), nil
}

func ProtectedHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		Body:       "This is protected path",
		StatusCode: http.StatusOK,
	}, nil
}

func main() {
	lambdaApp := app.NewApp()
	//* Hook lambda function to the gateway
	lambda.Start(func(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		switch request.Path {
		case "/register":
			return lambdaApp.APIHandler.RegisterUserHandler(request)
		case "/login":
			return lambdaApp.APIHandler.LoginUser(request)
		case "/protected":
			return middleware.ValidateJWTMiddleWare(ProtectedHandler)(request) // two () () is chaining the functions
		case "/login-google":
			return lambdaApp.APIHandler.GoogleSignInHandler(request)

		default:
			return events.APIGatewayProxyResponse{
				Body:       "Not Found",
				StatusCode: http.StatusNotFound,
			}, nil
		}
	})

}
