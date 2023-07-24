//we are going to learn how nodejs works 
//creating a basic http server

// Importing the 'http' module from Node.js core library to handle HTTP requests and responses.
const http = require("http");

// Creating an HTTP server using the 'createServer' method of the 'http' module.
// The 'createServer' method takes a callback function that is executed when a request is received.
const server = http.createServer((req, res) => {
    // When a request is received, this callback function is executed.

    // Set the HTTP status code to 200, indicating success.
    res.statusCode = 200;

    // Sending a response back to the client with the message "this is a http Server created by Aditya, and Bye".
    res.end('this is a http Server created by Aditya, and Bye');
});

// Defining the port number for the server to listen on.
const port = 4000;

// Starting the server to listen on the specified port.
// The 'listen' method takes the port number and a callback function that is executed when the server starts listening.
server.listen(port, () => {
    // This callback function is executed once the server starts listening on the specified port.

    // Logging a message to the console indicating that the server is running.
    console.log(`Server is running`);
});

// Overall, this code sets up a simple HTTP server that listens on port 4000 and responds to all incoming requests with the same message: "this is a http Server created by Aditya, and Bye".
// This is a basic example for understanding how to create an HTTP server using Node.js.
