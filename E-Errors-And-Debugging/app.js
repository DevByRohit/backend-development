// 1. Importing the http module
const http = require("http");

const syntaxError = require("./syntaxError");
const { runtimeError } = require("./runtimeError");
const logicalError = require("./logicalError");

// 2. Creating a server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // SyntaxError: missing ) after argument list
  // syntaxError();

  // Runtime Error: x is not defined
  // runtimeError();

  // Logical Error: Division by zero
  // logicalError();
});

// 3. Setting the port
const PORT = 3000;

// 4. Listening to the server
server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
