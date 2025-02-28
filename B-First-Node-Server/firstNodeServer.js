// server through node.js
const http = require("http");


// Create a server object
const server = http.createServer((req, res) => {
  console.log(req);
});

// Start the server on port 3000
const PORT = 3000;

// Print a message to the console when the server starts
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
