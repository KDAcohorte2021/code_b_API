const express = require("express");
const eventInitiatedController = require("../controllers/eventInitiatedController");

const eventInitiatedRouter = express.Router();

eventInitiatedRouter.get("/", eventInitiatedController.getAllEventsInitiated);
eventInitiatedRouter.get(
  "/:id",
  eventInitiatedController.getEventInitiatedById
);
eventInitiatedRouter.post("/", eventInitiatedController.registerEventInitiated);
eventInitiatedRouter.put("/:id", eventInitiatedController.updateEventInitiated);
eventInitiatedRouter.delete(
  "/:id",
  eventInitiatedController.deleteEventInitiated
);

module.exports = eventInitiatedRouter;
