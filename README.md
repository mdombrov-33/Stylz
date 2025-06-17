# My Project

## Overview

This project is a full-stack app composed of three main parts:

1. **Client** — A React frontend built with Vite, displaying a product catalog and handling user interactions.
2. **Mock API Server** — An Express.js server providing product catalog data with pagination, filtering, and static image hosting.
3. **AWS Lambda Backend** — A Go-based AWS Lambda function implementing user registration, login, and protected routes using JWT authentication, backed by DynamoDB.

---

## Client Setup

The client is a React app bootstrapped with Vite. It uses popular React libraries such as:

- React
- React Router DOM
- React Query for data fetching
- Zustand for state management
- Tailwind CSS and DaisyUI for styling
- Other utilities like axios, react-icons, etc.

### Installation & Development
```bash
cd client
npm install
npm run dev
```

## Mock API Server
This Node.js Express server provides REST API endpoints for the product catalog with the following features:

- CORS configured to allow requests only from `http://localhost:5173` and your Netlify URL.
- Serves static product images from `/images`.
- API Endpoints:
  - `GET /api/catalog` — returns paginated catalog items with optional query params: `page`, `limit`, `category`, `gender`.
  - `GET /api/catalog/:id` — returns a single catalog item by its unique ID.

### Running the Mock API Server

```bash
cd services/shop
npm install
node server.js
```
The server listens on port 8080 by default.

## AWS Lambda Backend (Go)

The backend is a Go Lambda function designed to be deployed on AWS Lambda and integrated with API Gateway and DynamoDB.

### Features

- Routes:
  - `/register` — user registration endpoint.
  - `/login` — user login endpoint.
  - `/protected` — protected route secured by JWT authentication middleware.
- Uses DynamoDB to store user data.
- JWT-based authentication with middleware protecting routes.
- Implemented as an infra-as-code Lambda function for serverless deployment.

### Deployment & Development

Build the Lambda function with Go tooling:

```bash
GOOS=linux GOARCH=amd64 go build -o main main.go
zip deployment.zip main
```
Deploy using AWS CLI, SAM, or your preferred infrastructure tool.

Make sure to configure AWS API Gateway routes pointing to this Lambda function.
