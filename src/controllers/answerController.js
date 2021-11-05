const { Answers } = require("../models");

async function answer(
  { body: { suggestedId, questionId, userId, startedTime } },
  response
) {
  const answerData = {
    suggestedId: suggestedId,
    questionId: questionId,
    userId: userId,
  };
  let sendingTime = new Date().getTime();

  if ((sendingTime - new Date(startedTime).getTime()) / 1000 > 30)
    return response.status(408).json({ message: "Time out" });

  try {
    const answer = await Answers.create(answerData);
    if (!answer) {
      response
        .status(400)
        .json({ error: "A problem occurred when adding the answer" });
    }
    response
      .status(201)
      .json({ message: "Answer added successfully !", answer });
  } catch (error) {
    response.status(500).json({ error: ` ${error}` });
  }
}

async function getAnswer(request, response) {
  const { id } = request.params;
  try {
    const answer = await Answers.findOne({
      where: {
        id,
      },
    });
    if (!answer)
      return response.status(404).json({ message: "Answer not found" });

    response
      .status(200)
      .json({ message: "Answers found successfully !", answer });
  } catch (error) {
    response.status(500).json({ error: ` ${error}` });
  }
}

async function getAnswers(request, response) {
  try {
    const answers = await Answers.findAll();
    if (!answers)
      return response.status(404).json({ message: "Answers not found" });

    response
      .status(200)
      .json({ message: "Answers found successfully !", answers });
  } catch (error) {
    response.status(500).json({ error: ` ${error}` });
  }
}

module.exports = { answer, getAnswer, getAnswers };
