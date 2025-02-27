// require core module
const path = require("path");

// require external modules
const express = require("express");

// create express router
const hostRouter = express.Router();

// require local module
const rootDir = require("../utils/pathUtil");

// handle GET requests on the /host/add-home page
hostRouter.get("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

// handle POST requests on the /host/add-home
hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
