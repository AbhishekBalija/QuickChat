# Real-Time Chat Application with MERN Stack

This project is a real-time chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack with Socket.IO for real-time communication.

The application allows users to sign up, log in, and engage in real-time conversations with other users. It features a responsive user interface, real-time message updates, and secure authentication.

## Repository Structure

```
.
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── zustand/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
└── package.json
```

### Key Files:
- `backend/server.js`: Entry point for the backend server
- `frontend/src/main.jsx`: Entry point for the frontend application
- `backend/socket/socket.js`: WebSocket configuration for real-time communication
- `frontend/vite.config.js`: Vite configuration for the frontend build process

## Usage Instructions

### Prerequisites
- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies for both backend and frontend:
   ```
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=8000
   MONGO_DB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   NODE_ENV=development
   ```

### Running the Application

1. Start the backend server:
   ```
   npm run server
   ```

2. In a separate terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Access the application at `http://localhost:3000`

### Testing & Quality

To run tests (if available):
```
npm test
```

### Troubleshooting

1. Issue: Unable to connect to MongoDB
   - Ensure your MongoDB instance is running
   - Check if the `MONGO_DB_URI` in your `.env` file is correct
   - Verify network connectivity to the MongoDB server

2. Issue: WebSocket connection fails
   - Check if both frontend and backend servers are running
   - Ensure the WebSocket URL in the frontend matches the backend server address

3. Issue: Authentication fails
   - Verify that the `JWT_SECRET` is set correctly in the `.env` file
   - Check if the token is being sent correctly in the request headers

For debugging:
- Enable verbose logging in the backend by setting `NODE_ENV=development`
- Check the browser console for frontend errors
- Review the server logs for backend issues

## Data Flow

The application follows a client-server architecture with real-time updates via WebSockets.

1. User Authentication:
   - Client sends login/signup request to the server
   - Server validates credentials and returns a JWT token
   - Client stores the token for subsequent authenticated requests

2. Fetching Conversations:
   - Client requests user's conversations from the server
   - Server queries the database and returns conversation data
   - Client displays the conversations in the sidebar

3. Sending Messages:
   - User types a message and sends it
   - Client emits a WebSocket event with the message data
   - Server receives the event, saves the message to the database
   - Server emits a WebSocket event to the recipient's client
   - Recipient's client updates the UI with the new message

4. Real-time Updates:
   - Server emits WebSocket events for user status changes
   - Clients listen for these events and update the UI accordingly

```
[Client] <---> [WebSocket Server] <---> [Express Server] <---> [MongoDB]
   ^                                           |
   |                                           v
[React UI] <----- [State Management (Zustand)] 
```

Note: The WebSocket server handles real-time events, while the Express server manages HTTP requests and database operations.