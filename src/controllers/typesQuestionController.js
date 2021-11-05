const TypesQuestion = require('../models');


async function addTypesQuestion(req, res, next) {
    const typesQuestionsInput = {
      name: req.body.name,
    };
  
    try {
      // Save Role to Database
      const typesQuestion = await TypesQuestion.create(typesQuestionsInput);
      if (typesQuestion) {
        res.status(201).send({ message: "type question was registered successfully!" });
      } else {
        throw new Error("problem arising from the type question");
      }
    } catch (error) {
      // Rollback transaction if is not successful
      res.status(500).send({ error: ` ${error}` });
    }
  }

  async function getAllTypesQuestion (req, res, next){
      try {
        const typesQuestions = await TypesQuestion.findAll({});
        if (typesQuestion){
            res.status(200).send(typesQuestions);
        } 
      } catch (error) {
          throw new Error(error);
      }
  }

  async function getOneTypesQuestion (req, res,next){
      const id = req.params.id;
      try {
         const oneTypesQuestion= await TypesQuestion.findOne({where:{id:id}});
         if(oneTypesQuestion){
             res.status(200).send(oneTypesQuestion);
         }
      } catch (error) {
          throw new Error(error);
      }
  }

  async function updateTypesQuestion(req, res, next){
      const id = req.params.id;
      try {
          const typeQuestion = await TypesQuestion.update(req.body, {where:{id:id}})
          if (typesQuestion) {
              res.status(200).send(typeQuestion);
          }
      } catch (error) {
          throw new Error(error);
      }
  }

  async function deleteTypesQuestion(req, res, next){
    const id = req.params.id;
    try {
        await TypesQuestion.destroy({where:{id:id}})
            res.status(200).send('type question is deleted');
    } catch (error) {
        throw new Error(error);
    }
}
  
  module.exports = {
    addTypesQuestion,
    getAllTypesQuestion,
    getOneTypesQuestion,
    updateTypesQuestion,
    deleteTypesQuestion,
  };
  