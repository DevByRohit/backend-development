const { calculate } = require("./calculate");
const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write(`
    <html>
      <head>
        <title>Home Page</title>
        <style>
        .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      h1 {
        border: 1px solid black;
        background-color: lightgray;
        border-radius: 5px;
        padding: 15px;
      }

      button {
        padding: 15px 15px;
        border: 1px solid black;
        cursor: pointer;
        border-radius: 5px;
        font-size: medium;
        font-weight: bold;
      }
    </style>
    </head>
    <body>
    <div class="container">
      <h1>This Is Welcome Message For Calculator Page</h1>
      <a href="/calculate"><button>Click Here For Calculation</button></a>
    </div>
    </body>
  </html>
  `);
    return res.end();
  } else if (req.url === "/calculate") {
    res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator Page</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      h1 {
        text-align: center;
        padding: 15px;
        margin: 10px;
        background-color: hsl(62, 100%, 69%);
        border: 1px solid black;
        border-radius: 10px;
        text-transform: uppercase;
        box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
      }

      form {
        padding: 25px;
        background-color: hsl(67, 100%, 74%);
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
      }

      input {
        text-align: center;
        padding: 10px;
        margin: 5px 5px;
        border: 1.5px solid black;
        border-radius: 5px;
        outline: none;
        font-size: medium;
        font-weight: bold;
        cursor: pointer;
      }
      select {
        padding: 10px;
        margin: 8px 0px;
        border: 1.5px solid black;
        border-radius: 5px;
        font-size: medium;
        font-weight: bold;
        outline: none;
        cursor: pointer;
      }
      button {
        padding: 10px 25px;
        margin-top: 25px;
        border-radius: 5px;
        font-size: large;
        background-color: #a9ff97;
        border: 1.5px solid black;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
      }
    </style>
  </head>
  <body>
    <h1>Welcome To Calculator Page</h1>
    <form
      action="/calculate-result"
      method="POST"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      "
    >
      <input type="number" name="num1" placeholder="Number 1" />
      <input type="number" name="num2" placeholder="Number 2" />
      <select name="operator">
        <option>None</option>
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
        <option>Divide</option>
      </select>
      <br />
      <a href="/calculate-result"
        ><button type="submit" name="submit" value="submit">
          Calculate
        </button></a
      >
    </form>
  </body>
</html>
`);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    const body = [];

    // read data from request
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      // concatenate all chunks of data
      const fullBody = Buffer.concat(body).toString();

      // parse query parameters from body and store them in an object
      const params = new URLSearchParams(fullBody);

      // create an object to store user's input data and calculate result if operator is selected
      const userInputData = {};

      // iterate through query parameters and store them in an object
      for (const [key, value] of params.entries()) {
        userInputData[key] = value;
      }

      // convert user's input data to numbers and calculate result if operator is selected
      const num1 = Number(userInputData.num1); // 1st way to convert string to number
      const num2 = Number(userInputData.num2); // 1nd way to convert string to number

      // const num1 = parseInt(userInputData.num1); // 2nd way to convert string to number
      // const num2 = parseInt(userInputData.num2); // 2rd way to convert string to number

      const operator = userInputData.operator;

      // call the calculate function to calculate the result
      calculate(num1, num2, operator, res);
    });
  } else {
    res.write(`
      <html>
      <head>
        <title>Error Message</title>
        <style>
          .error-msg {
            text-align: center;
            margin-top: 10%;
          }
          p {
            margin-top: 10px;
            font-size: 20px;
          }
          a {
            text-decoration: none;
            color: blue;
            font-size: 20px;
            border: 1px solid blue;
            padding: 5px 10px;
            border-radius: 5px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="error-msg">
          <h1>404 Page Not Found</h1>
          <p>Sorry, the page you are looking for could not be found.</p>
          <a href="/">Click here to go back to the home page.</a>
        </div>
      </body>
     </html>
      `);
    return res.end();
  }
};

module.exports = requestHandler;
