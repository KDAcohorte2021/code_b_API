'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuggestedAnswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.SuggestedAnswers.belongsTo(models.question, {
        foreignkey: {
          allowNull: false,
          name: "questionId"
        }
      })
    }
  };
  SuggestedAnswers.init({
    content: {
      type:DataTypes.STRING,
      allowNull: false
    },
    goodAnswer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SuggestedAnswers',
  });
  return SuggestedAnswers;
};