# Movie Ranking API

A RESTful API service for managing and retrieving ranked movie data.

## Features

- User authentication (register, login, logout)
- Protected movie endpoints requiring authentication
- Get all movies sorted by rank
- Get movies by ID
- Get movies within a specific rank range
- Error handling and validation
- CORS support
- Secure cookie-based JWT authentication

## Tech Stack

- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Cookie Parser
- CORS

## API Endpoints

### Authentication

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user

### Movies

- GET `/api/movies` - Get all movies (requires auth)
- GET `/api/movies/rank?start=1&limit=10` - Get movies by rank range (requires auth)
- GET `/api/movies/:id` - Get movie by ID (requires auth)

## Environment Variables

Create a `.env` file in the root directory with the following variables:
