## Project Overview

Wrk MVP is a contract management platform 
## Tech Stack

### Frontend
- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API communication

### Backend
- Express.js with TypeScript
- PostgreSQL database
- JWT for authentication
- Zod for validation

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Project Structure

```
contract-management-app/
├── client/                     # Frontend React application
│   ├── public/                 # Static files
│   └── src/                    # Source files
│       ├── components/         # Reusable UI components
│       ├── pages/             # Page components
│       ├── lib/               # Utilities and helpers
│       └── types/             # TypeScript definitions
├── server/                     # Backend Express application
│   └── src/
│       ├── config/            # Configuration files
│       ├── controllers/       # Route controllers
│       ├── middleware/        # Express middleware
│       ├── models/           # Database models
│       ├── routes/           # Express routes
│       └── utils/            # Utility functions
└── docs/                      # Project documentation
```

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd contract-management-app
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:
```bash
# In server directory
cp .env.example .env
```

4. Start the development servers:
```bash
# Start backend server
cd server
npm run dev

# Start frontend development server
cd ../client
npm start
```

## Environment Variables

### Server
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRES_IN` - JWT token expiration time

### Client
- `REACT_APP_API_URL` - Backend API URL

## Available Scripts

### Server
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

### Client
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run eject` - Eject from Create React App

## Documentation

- [Client Documentation](docs/client/phase1.md)
- [Server Documentation](docs/server/phase1.md)
- [Phase Overview](docs/phaseoverview/phase1.md)






