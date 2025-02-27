// import local module
const requestHandler = require("./takingInputFromUser");

// import external module
const express = require("express");

// create an express app
const app = express();

// how to use middleware in express
app.use("/", (req, res, next) => {
  console.log("In the first middleware", req.url, req.method);
  //   res.send("<h1>Middleware One</h1>");
  // call the next middleware by next() function
  next();
});
app.use("/submit-details", (req, res, next) => {
  console.log("In the second middleware", req.url, req.method);
  res.send("<h1>Middleware Two</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the first middleware", req.url, req.method);
  res.send("<h1>came from another middleware</h1>");
});

// define port number
const PORT = 3000;

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
