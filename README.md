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
   cd api

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
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/bfaad7d6-2629-4f84-8ca5-6beef6a56807)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/96346ca7-e16d-4104-9d91-d88afa1e760c)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/3483936a-28c4-4840-85cf-de5910b68be9)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/eb8b886d-67b3-4c5d-97d4-6609d338e352)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/48e695dc-94a7-4e6d-8c0f-d9f86588b4f7)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/c8011650-0c9a-4622-9ec7-cd4a355c2f41)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/7c602e0c-bbf9-4540-a621-27a559adb72b)
![image](https://github.com/venkatsaipalla/Pioneer-Lab-Assignment-backend-API-/assets/72677771/25bf49e1-d960-4187-a972-1515e5e904e4)





