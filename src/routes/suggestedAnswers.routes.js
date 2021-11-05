const express = require("express");
const {createSuggestedAnswers,getOneSuggestedAnswer,getSuggestedAnswers,deletedSuggestedAnswer,modifiedSuggestedAnswer} = require("../controllers/suggestedAnswersController");
const suggestedAnswers = express.Router();

suggestedAnswers.post("/create", createSuggestedAnswers);
suggestedAnswers.get("/", getSuggestedAnswers);
suggestedAnswers.get("/:id", getOneSuggestedAnswer);
suggestedAnswers.delete("/deleted", deletedSuggestedAnswer);
suggestedAnswers.put("/modifier", modifiedSuggestedAnswer);

module.exports = suggestedAnswers;