const SuggestedAnswers = require("../models/suggestedAnswers");

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
        const results = await SuggestedAnswers.findAll();
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
        });
        return res.status(200).json({message : "fait", data: results});
    } catch (error) {
        return res.status(500).json(err);
    }
}

module.exports = {createSuggestedAnswers, getSuggestedAnswers, getOneSuggestedAnswer}