// require core module
const path = require("path");

// require express module
const express = require("express");

// require local module
const rootDir = require("../utils/pathUtil");

// create routes from express
const userRouter = express.Router();

// define routes for Home
userRouter.get("/", (req, res, next) => {
  // Send a response with a home.html file
  //   res.sendFile(rootDir + "/views/home.html");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// define routes for contact us
userRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

userRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "submitData.html"));
});

module.exports = userRouter;
