const express = require("express");
const registerController = require("./../controllers/eventController.js");

const eventRouter = express.Router();

eventRouter.post("/register", registerController.register);

module.exports = eventRouter;
