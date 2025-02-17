// Server through simple node.js
const http = require("http");

const requestHandler = require("./takingInputFromUser");

// create a server object
const server = http.createServer(requestHandler);

// define port number
const PORT = 3000;

// start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
