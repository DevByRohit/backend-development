// Importing the http module
const http = require("http");
const requestHandler = require("./home");
// Creating a server
const server = http.createServer(requestHandler);

// Define the port number
const PORT = 3000;

// listening the server on the specified port;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
