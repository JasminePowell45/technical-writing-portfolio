# Athlete API

## Overview
Athlete API is a simple RESTful API built with Express.js for managing basketball player data.

It allows clients to:
- Retrieve a list of players
- Create a new player resource

This project demonstrates the structre and documentation of a RESTful API, including HTTP methods, status codes, request/response examples, and error handling. It serves as a portfolio example of technical writing and backend APIdocumentation. 

## Installation
1. Clone the repository:
```bash
git clone <YOUR_REPO_URL>
```
2. Navigate into the folder:
```bash
cd athlete-api
```
3. Install dependencies:
```bash
npm install
```
4. Start the server:
```bash
node index.js
```
5. The server will run on `http://localhost:3000/`


## Endpoints

### GET/
- Description: Check if API is running
- URL: `http:localhost:3000/`
- Method: GET
- Example Response:
```json
{
 "message": "API is running"
}
```

### GET/players
- Description: Retrieve list of basketball players
- URL: `http://localhost:3000/players`
- Method: GET
- Example Response
```json
   {
        "id": 1,
        "name": "John Doe",
        "position": "Guard"
    },
    {
        "id": 2,
        "name": "Mike Smith",
        "position": "Forward"
    }
```
- Terminal Output:
```
GET /players HIT
```

### POST /players
- Description: Add a new player
- URL: `http://localhost:3000/players`
- Method: POST
- Body Example:
```json
{
	"name": "Chris Paul",
    "position": "Guard"
}
```
- Example Response:
```json
{
    "message": "POST works",
    "body": {
        "name": "Chris Paul",
        "position": "Guard"
    }
}
```
- Terminal Output:
```
POST /players HIT
```
## Error Handling
The Athlete API returns standard HTTP status codes to indicate
the success or failure of a request.

### 200 0K
Returned when a GET request is successful.
---

### 201 Created
Returned when a new player is successfully created using the POST enpoint.
---

### 400 Bad Request
Returned when required fields are missing in the request body.

Example:
```json
{
	"error": "Bad Request",
	"message": "Both 'name' and 'position' are required."
}
```
---

### 404 Not Found
Returned when the requested endpoint does not exist.

Example:
```json
{
	"error": "Not Found",
	"message": "The requested endpoint does not exist."
}
```
---

### Future Improvements
- Connect to a database (MongoDB, PostgreSQL) to persist playes
- Add input validation for POST requests
- Implement DELETE and PATCH endpoints
- Add authentication for secure access


## Contributing
This project is part of a technical writing portfolio.

If you would like to suggest improvements, feel free to fork the repository and submit a pull request.

Before contributing:
- Install dependencies using `npm install`
- Start the server with `node index.js`


## License
This project is provided for educational and portfolio purposes only.
