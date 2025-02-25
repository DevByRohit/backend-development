const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`
    <html>
    <head>
    <title>My First Node App</title>
    </head>
    <body>
    <h1>Hello World</h1>
    <p>This is a simple Node.js server.</p>
    </body>
    </html> 
    `);
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
