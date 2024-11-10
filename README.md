# Temple Management System

This project is a Temple Management System built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to book poojas, manage profiles, and make donations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Pooja booking and scheduling
- Profile management for users and pandiths
- Donation management
- Notification system
- Admin panel for managing users and pandiths

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/temple-management-system.git
    cd temple-management-system
    ```

2. Install dependencies for both client and server:

    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `server` directory and add the following:

    ```env
    PORT=8080
    MONGO_URL=mongodb://localhost:27017/temple
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    DEV_MODE=development
    FRONTEND_URL=http://localhost:3001
    ```

    Create a  file in the  directory and add the following:

    ```env
    REACT_APP_BASE_URL=http://localhost:8080
    REACT_APP_API_URL=http://localhost:8080/api/v1
    ```

4. Start the development servers:

    ```sh
    # In the server directory
    npm run server

    # In the client directory
    npm start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the client application.
- Use `http://localhost:8080` for API requests.

## API Endpoints

### User Routes

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login a user
- `POST /api/v1/auth/get-user-info` - Get user information
- `POST /api/v1/auth/apply-pandith` - Apply for a pandith account
- `POST /api/v1/auth/mark-all-notifications-as-seen` - Mark all notifications as seen
- `POST /api/v1/auth/delete-all-seen-notifications` - Delete all seen notifications
- `GET /api/v1/auth/getAllApprovedPandiths` - Get all approved pandiths
- `POST /api/v1/auth/book-pooja` - Book a pooja
- `POST /api/v1/auth/booking-availability` - Check booking availability
- `GET /api/v1/auth/user-poojas` - Get user poojas

### Admin Routes

- `GET /api/v1/admin/users` - Get all users
- `GET /api/v1/admin/pandiths` - Get all pandiths

### Pandith Routes

- `GET /api/v1/pandith/poojas` - Get pandith poojas
- `POST /api/v1/pandith/updatePoojaStatus` - Update pooja status

## Technologies Used

- **Frontend:**
  - React
  - Redux
  - Ant Design
  - Axios
  - React Router

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT
  - Bcrypt

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.