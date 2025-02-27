// import external modules
const express = require("express");

// create an instance of the express app
const app = express();

// middleware one
app.use((req, res, next) => {
  console.log("Dummy Middleware One", req.url, req.method);
  next();
});

// middleware two
app.use((req, res, next) => {
  console.log("Dummy Middleware Two", req.url, req.method);
  next();
});

// middleware three for sending response
// app.use((req, res, next) => {
//   console.log("Dummy Middleware Three", req.url, req.method);
//   res.send("<h1>Third Middleware For Sending Response</h1>");
// });

// Two more middlewares which handle "/" and "/contact-us" routes
app.get("/", (req, res, next) => {
  console.log("handle the / route", req.url, req.method);
  res.send(`<h1>Welcome to Home Page</h1>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log("handle the '/contact-us' route", req.url, req.method);
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        border: 1.5px solid black;
        border-radius: 10px;
        padding: 30px;
        background-color: #f3ff84;
      }
      h1 {
        text-align: center;
        margin-bottom: 20px;
      }
      input {
        margin: 7px;
        padding: 5px;
        border: 1.5px solid black;
        border-radius: 5px;
        outline: none;
      }
      label {
        font-size: large;
        font-weight: bold;
      }
      .submit-button {
        margin-top: 30px;
        padding: 7px 10px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #45db4a;
        font-size: large;
        font-weight: bold;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Contact Us</h1>
      <form action="/contact-us" method="POST">
        <label for="name">Name :</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required />
        <br />
        <input class="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  </body>
</html>
`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("handle the '/contact-us' route", req.url, req.method);
  res.send(`<h1>Thank you for submitting the form</h1>`);
});

// create port number
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
