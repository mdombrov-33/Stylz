package database

import (
	"fmt"
	"lambda-func/types"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

const (
	TABLE_NAME = "StylzUserTable"
)

type UserStore interface {
	DoesUserExist(email string) (bool, error)
	GetUser(email string) (types.User, error)
	InsertUser(user types.User) error
}

type DynamoDBClient struct {
	dataBaseStore *dynamodb.DynamoDB
}

func NewDynamoDBClient() DynamoDBClient {
	dbSession := session.Must(session.NewSession()) // creates a new AWS session and panics if there is an error
	db := dynamodb.New(dbSession)                   // creates a new DynamoDB client using the session

	return DynamoDBClient{
		dataBaseStore: db,
	}
}

// * Does this user exists?
// * How do i insert a new record into DynamoDB?
func (u DynamoDBClient) DoesUserExist(email string) (bool, error) {
	result, err := u.dataBaseStore.GetItem(&dynamodb.GetItemInput{ // using & by AWS design. Pass by reference is more performant
		TableName: aws.String(TABLE_NAME),
		Key: map[string]*dynamodb.AttributeValue{ // basically the records we are looking for. We are looking for primary key - email
			"email": {
				S: aws.String(email),
			},
		},
	})
	if err != nil {
		return true, err
	}

	if result.Item == nil {
		return false, nil
	}

	return true, nil
}

func (u DynamoDBClient) InsertUser(user types.User) error {
	// assemble the item
	item := &dynamodb.PutItemInput{
		TableName: aws.String(TABLE_NAME),
		Item: map[string]*dynamodb.AttributeValue{
			"email": {
				S: aws.String(user.Email),
			},
			"password": {
				S: aws.String(user.PasswordHash),
			},
			"full_name": {
				S: aws.String(user.FullName),
			},
		},
	}
	// insert the item
	_, err := u.dataBaseStore.PutItem(item)
	if err != nil {
		return err
	}

	return nil
}

func (u DynamoDBClient) GetUser(email string) (types.User, error) {
	var user types.User

	result, err := u.dataBaseStore.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String(TABLE_NAME),
		Key: map[string]*dynamodb.AttributeValue{
			"email": {
				S: aws.String(email),
			},
		},
	})
	if err != nil {
		return user, err
	}

	//* user does not exist
	if result.Item == nil {
		return user, fmt.Errorf("user not found")
	}

	//* unmarshal the item
	err = dynamodbattribute.UnmarshalMap(result.Item, &user)
	if err != nil {
		return user, err
	}

	return user, nil
}
