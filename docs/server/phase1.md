# docs/server/phase1.md
# Server Documentation - Phase 1

## Overview

The server-side application is built using Express.js with TypeScript, providing a robust API for user authentication and business profile management. This document details the implementation and features of Phase 1.

## Architecture

### Directory Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middleware/       # Express middleware
├── models/          # Database models
├── routes/          # API routes
├── types/           # TypeScript definitions
└── utils/           # Utility functions
```

## Core Components

### Database Configuration

- PostgreSQL database connection
- Connection pool management
- Database initialization script
- User table schema

### Authentication System

#### JWT Implementation
- Token generation and validation
- Secure password hashing with bcrypt
- Token expiration management
- Authentication middleware

#### Security Features
- Password hashing
- JWT token validation
- Request validation
- Error handling

### API Routes

#### Authentication Routes
- `/api/auth/signup` - User registration
- `/api/auth/login` - User authentication
- Protected route middleware

### Middleware

#### Authentication Middleware
- Token verification
- User context injection
- Error handling

#### Validation Middleware
- Request body validation using Zod
- Input sanitization
- Error response formatting

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  business_name VARCHAR(255) NOT NULL,
  business_address TEXT,
  phone_number VARCHAR(20),
  timezone VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### POST /api/auth/signup
- Creates new user account
- Validates input data
- Returns JWT token and user data

### POST /api/auth/login
- Authenticates user credentials
- Returns JWT token and user data

## Error Handling

- Centralized error handling
- Consistent error response format
- Detailed error messages
- Error logging

## Security Measures

- Password hashing
- JWT token security
- Input validation
- SQL injection prevention
- CORS configuration

## Environment Configuration

- Environment variable management
- Configuration validation
- Development/production environments

## Future Enhancements

1. Password reset functionality
2. Email verification
3. Rate limiting
4. Logging system
5. User profile updates
6. Session management

## Best Practices

- TypeScript for type safety
- Input validation
- Error handling
- Security measures
- Database optimization
- Code organization
- Documentation