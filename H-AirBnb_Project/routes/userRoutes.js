// require core module
const path = require("path");

// require local module
const rootDir = require("../utils/pathUtil");

// require external modules
const express = require("express");

// create express router
const userRouter = express.Router();

// handle GET requests on the / page
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
