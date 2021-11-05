const express = require("express");
const {createSuggestedAnswers,getOneSuggestedAnswer,getSuggestedAnswers,deletedSuggestedAnswer,modifiedSuggestedAnswer} = require("../controllers/suggestedAnswersController");
const suggestedAnswers = express.Router();

suggestedAnswers.post("suggested-answers/create", createSuggestedAnswers);
suggestedAnswers.get("suggested-answers/", getSuggestedAnswers);
suggestedAnswers.get("suggested-answers/:id", getOneSuggestedAnswer);
suggestedAnswers.delete("suggested-answers/deleted", deletedSuggestedAnswer);
suggestedAnswers.put("suggested-answers/modifier", modifiedSuggestedAnswer);

module.exports = suggestedAnswers;