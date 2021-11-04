const { Answers } = require("../models");

async function answer(request, response) {
  const answerData = {
    suggestedId: request.body.questionId,
    questionId: request.body.questionId,
    userId: request.body.userId,
  };
  try {
    const answer = await Answers.create(answerData);
    if (!answer) {
      throw new Error("A problem occurred when adding the answer");
    }
    response
      .status(201)
      .send({ message: "Answer added successfully !", answer });
  } catch (error) {
    response.status(500).send({ error: ` ${error}` });
  }
}

async function getAnswers(request, response) {
  try {
    const answers = await Answers.findAll();
    if (!answers) {
      throw new Error("A problem occurred when getting answers");
    }
    response
      .status(200)
      .send({ message: "Answers found successfully !", answers });
  } catch (error) {
    response.status(500).send({ error: ` ${error}` });
  }
}

module.exports = { answer, getAnswers };
