const express = require("express");
const eventController = require("./../controllers/eventController.js");

const eventRouter = express.Router();

eventRouter.post("/register", eventController.register);
eventRouter.put("/update/:id", eventController.updateEvent);
eventRouter.delete("/delete/:id", eventController.deleteEvent);
eventRouter.get("/events", eventController.getAllEvents);
eventRouter.get("/:id", eventController.getEvent);

module.exports = eventRouter;
