const typesQuestionController = require('../controllers/typesQuestionController.js');

const typesQuestionsRouter = require('express').Router();

typesQuestionsRouter.post('/add', typesQuestionController.addTypesQuestion);
typesQuestionsRouter.get('/getall', typesQuestionController.getAllTypesQuestion);
typesQuestionsRouter.get('/getone/:id', typesQuestionController.getOneTypesQuestion);
typesQuestionsRouter.put('/update/:id', typesQuestionController.updateTypesQuestion);
typesQuestionsRouter.delete('/delete/:id', typesQuestionController.deleteTypesQuestion);

module.exports= typesQuestionsRouter;

