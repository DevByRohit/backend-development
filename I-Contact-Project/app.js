// require core module
const path = require("path");

// require the external module
const express = require("express");

// require the local module
const userRouter = require("./routes/userRoute");
const rootDir = require("./utils/pathUtil");

// Create a new instance of express
const app = express();

app.use(express.urlencoded());

// Define a route for the homepage
app.use(userRouter);

// Define a route for handling errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

// Set the port number
const PORT = 3000;

// server listing on port 3000
app.listen(PORT, () => {
  // Log a message when the server starts listening
  console.log(`Server is running at http://localhost:${PORT}`);
});
