const express = require("express");
const answerController = require("../controllers/answerController");

const answerRouter = express.Router();

answerRouter.post("/answer", answerController.answer);

module.exports = answerRouter;
