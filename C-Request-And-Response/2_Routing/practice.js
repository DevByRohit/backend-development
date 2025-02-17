// require http module
const http = require("http");

// create a server object
const server = http.createServer((req, res) => {
  // set response header
  res.setHeader("Content-Type", "text/html");

  // write a response to the client
  res.write(`<html lang="en">
  <head>
    <title>Myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <ul
          style="
            display: flex;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            background: #fcff67;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          "
        >
          <li><a href="/Home">Home</a></li>
          <li><a href="/Men">Men</a></li>
          <li><a href="/Women">Women</a></li>
          <li><a href="/Kids">Kids</a></li>
          <li><a href="/Cart">Cart</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>
`);

  // redirect to product pages based on requested URL
  // logic to redirect to different pages based on requested URL

  if (req.url === "/Home") {
    res.write("<h1>Welcome to Home Page!</h1>");
    return res.end();
  } else if (req.url === "/Men") {
    res.write("<h1>Welcome to Men Products!</h1>");
    return res.end();
  } else if (req.url === "/Women") {
    res.write("<h1>Welcome to Women Products!</h1>");
    return res.end();
  } else if (req.url === "/Kids") {
    res.write("<h1>Welcome to Kids Products!</h1>");
    return res.end();
  } else if (req.url === "/Cart") {
    res.write("<h1>Welcome to Cart Page!</h1>");
    return res.end();
  }

  // set response status code
  res.statusCode = 302;
  res.end();
});

// define the port number
const PORT = 3000;

// start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
