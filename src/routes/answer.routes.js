const express = require("express");
const answerController = require("../controllers/answerController");

const answerRouter = express.Router();

answerRouter.post("/register", answerController.responde);

module.exports = answerRouter;
