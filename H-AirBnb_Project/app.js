// require core module
const path = require("path");

// require external modules
const express = require("express");

// require local modules
const userRoutes = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

// create an express application
const app = express();

// middleware for parsing the request body
app.use(express.urlencoded());

// use the user routes
app.use(userRoutes);

// use the host routes
app.use(hostRouter);

// error handling middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
// define port number
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
