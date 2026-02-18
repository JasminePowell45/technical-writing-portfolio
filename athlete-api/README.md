# Athlete API

## Overview
Athlete API is a simple Express.js server to track basketball players.
It allows you to:
- View all players
- Add a new player

This project demonstrates a RESTful API with GET anf POST endpoints and serves as a portfolio example for technical writing and backend development.

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

### Future Improvements
- Connect to a database (MongoDB, PostgreSQL) to persist playes
- Add input validation for POST requests
- Implement DELETE and PATCH endpoints
- Add authentication for secure access


## Contributing
Feel free to fork this repository and submit pull requests.
Before contributing:
- Run npm install to install dependencies
- Start the server with node index.js


## License
This project is licensed under MIT License.
