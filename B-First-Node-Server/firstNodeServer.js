// server through node.js
const http = require("http");


const server = http.createServer((req, res) => {
  console.log(req);
});

// Start the server on port 3000
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
