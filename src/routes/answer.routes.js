const express = require("express");
const answerController = require("../controllers/answerController");

const answerRouter = express.Router();

answerRouter.get("/findOne/:id", answerController.getAnswer);

answerRouter.get("/findAll", answerController.getAnswers);

answerRouter.post("/register", answerController.answer);

module.exports = answerRouter;
