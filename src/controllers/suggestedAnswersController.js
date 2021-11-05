const SuggestedAnswers = require("../models/suggestedAnswers");
const Question = require("../models/question");

const createSuggestedAnswers = async ({body}, res) => {
    const {content, goodAnswer, questionId} = body;
    try {
        const results = await SuggestedAnswers.create({content, goodAnswer, questionId});
        return res.status(201).json({message : "fait", data: results});
    } catch (error) {
        return res.status(500).json(err);
    }
}

const getSuggestedAnswers = async (_,res) => {
    try {
        const results = await SuggestedAnswers.findAll({ include: [Question] });
        return res.status(200).json({message : "fait", data: results});
    } catch (error) {
        return res.status(500).json(err);
    }
}

const getOneSuggestedAnswer = async ({params},res) => {
    const {id} = params;
    try {
        const results = await SuggestedAnswers.findOne({
            where: { id },
            include: [Question]
        });
        return res.status(200).json({message : "fait", data: results});
    } catch (error) {
        return res.status(500).json(err);
    }
}

const deletedSuggestedAnswer = async ({params},res) => {
    const {id} = params;
    try {
        const results = await SuggestedAnswers.findOne({
            where: { id },
        });
        await results.destroy()
        return res.status(200).json({message : "Suggested answer deleted"});
    } catch (error) {
        return res.status(500).json(err);
    }
}

const modifiedSuggestedAnswer = async ({params, body},res) => {
    const {id} = params;
    const {content, goodAnswer, questionId} = body;
    try {
        const results = await SuggestedAnswers.findOne({
            where: { id },
        });
        results.content = content
        results.goodAnswer = goodAnswer
        results.questionId = questionId

        await results.save();
        return res.status(200).json({message : "fait", data: results});
    } catch (error) {
        return res.status(500).json(err);
    }
}

module.exports = {createSuggestedAnswers, getSuggestedAnswers, getOneSuggestedAnswer, deletedSuggestedAnswer, modifiedSuggestedAnswer}