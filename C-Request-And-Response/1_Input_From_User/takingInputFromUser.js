// require filesystem module
const fs = require("fs");

const userRequestHandler = (req, res) => {
  // set response header
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Home Page!</h1>");
    res.write("<h2>Enter Your Details</h2>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<label for='name'>Name: </label>");
    res.write(
      "<input type='text' name='username' id='username' placeholder='Enter Your Name'><br><br>"
    );
    res.write("<label for='gender'>Gender</label><br>");
    res.write("<input type='radio' name='gender' value='male'>");
    res.write("<label for='male'>Male</label><br>");
    res.write("<input type='radio' name='gender' value='female'>");
    res.write("<label for='female'>Female</label><br><br>");

    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];

    // read data from request
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // write data to file
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      // parse query parameters from body and store them in an object
      const params = new URLSearchParams(fullBody);
      // const userDetails = {};

      // iterate through query parameters and store them in an object
      // for (const [key, value] of params.entries()) {
      //   userDetails[key] = value;
      // }
      const userDetails = Object.fromEntries(params);
      console.log(userDetails);
      fs.writeFileSync("userInputData.txt", JSON.stringify(userDetails));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Server</title></head>");
  res.write("<body><h1>Welcome to my Node Server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = userRequestHandler;
