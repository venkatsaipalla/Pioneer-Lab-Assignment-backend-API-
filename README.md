# Pioneer-Lab-Assignment-backend-API-
This project is a Node.js application that demonstrates various features including user authentication with JWT, fetching data from public APIs, Swagger documentation, securing routes, and retrieving Ethereum account balance using web3.js.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally (or a MongoDB Atlas account)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-.git
   
2. Navigate to the project directory:

   ```bash
   cd pioneer-lab-assignment

3. Install dependencies:

   ```bash
   npm install
   
4. Create a .env file in the root directory with the following environment variables(for the instance i'm uploading the env file):
5. Replace <your-mongodb-uri> with the connection URI for your MongoDB database and <your-secret-key> with a secret key of your choice.

   ```bash
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   SECRET_KEY=<your-secret-key>
   jWT_EXPIRATION=86400 // 24 hours in seconds

6. Start the server:
   ```bash
   npm start

### Usage

1. Register a new user: ``POST /auth/register``
   Body: ```{ "email": "user@example.com", "password": "Password123!" }```
   Errors:
       400 Bad Request: If email or password is missing or invalid format.
       409 Conflict: If the email already exists.

2. Log in with existing user credentials: ```POST /auth/login```
   Body: ```{ "email": "user@example.com", "password": "Password123!" }```
   Errors:
       401 Unauthorized: If the email or password is incorrect.

3. Log out the current user: ```GET /auth/logout```
   Errors:
       401 Unauthorized: If the user is not logged in.

4. Retrieve data from public APIs: ```GET /data```
   Query parameters:
       category: Filter data by category (case-insensitive)
       limit: Limit the number of results returned
   Errors:
       400 Bad Request: If query parameters are invalid.
       404 Not Found: If no data matches the criteria.
   
5. Retrieve filtered data from public APIs (Protected): GET /data/filter
   Requires JWT authentication token obtained after successful login.
   Query parameters:
       category: Filter data by category (case-insensitive)
       limit: Limit the number of results returned
   Errors:
       401 Unauthorized: If no token is provided or the token is invalid.

6. Retrieve Ethereum account balance: GET /ethbalance/:address
   Requires a valid Ethereum address as a parameter.
   Errors:
       500 Internal Server Error: If there is an issue fetching the balance.****   

### Swagger Documentation
## Interactive API documentation is available at /api-docs endpoint. It provides detailed information about all the API endpoints, including request parameters and responses.
