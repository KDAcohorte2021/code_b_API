const express = require("express");
const registerController = require("./../controllers/eventController.js");

const eventRouter = express.Router();

eventRouter.post("/register", registerController.register);
eventRouter.put("/update/:id", registerController.updateEvent);
eventRouter.delete("/delete/:id", registerController.deleteEvent);

module.exports = eventRouter;
