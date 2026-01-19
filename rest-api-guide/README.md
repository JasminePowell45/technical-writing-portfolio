# How a REST API Works (Beginner-Friendly Guide)

## Overview 
An API (Application Programming Interface) allows software applications to communicate with each other.
Instead of interacting directly with a user interface, one program a request to another program and receives a response. 

REST APIs are one of the most common ways applications exchange data over the internet.

## What is REST?
REST stands for Representational State Transfer.
It is a design style that defines how applications should communicate using standard web protocols.

REST APIs typically use HTTP (Hypertext Transfer Protocol), the same protocol((code)) used by web browsers.

## Key REST Concepts

## How a REST API Works (Diagram)
```
![REST API Diagram](downlaods/REST-API.png)
```

### Client and Server
In a REST API, the client is the application that sends a request.
The server is the application that receives and returns a response.

For example, a web browser can act as a client, while a backend service acts as the server.

### Requests and Responses 
Explain how data is exchanged 

### HTTP Methods
Explain GET, POST, PUT, DELETE.

### Statud Codes 
HTTP status codes indicates whether a request was successful or failed. 

Common status codes include:
- 200 OK: The request was successful
- 404 Not Found: The requested resource does not exist
- 500 Internal Server Error: The server encountered an error

## Example: A Simple REST API 
This example uses the JSONPlaceholder API, which provides fake data for testing and learning purposes. 

## Making a Request 
Below is an example of a GET request that retrieves a list of users. 

GET https://jsonplaceholder.typicode.com/users

##Understanding the Response 
The API returns data in JSON format. 

Example responses: 
```json
[
 {
    "id: 1,
    "name": "Leanne Graham",
    "email": "leanne@example.com"
 }
]
```
Each object in the response represents a user.
The `id` field uniquely identifies the user's name.
The `name` field contains the user's name.
The `email` field contains the user's email address.

## Documentation 
- [Setup Guide](./setup-guide.md)
- [API Reference](./api-reference.md)
- [Troubleshooting Guide](./troubleshooting.md)

## Summary 
REST APIs allow applications to communicate using standard HTTP methods.
By sending requests and receiving structured responses, applications can exchange data efficiently.
