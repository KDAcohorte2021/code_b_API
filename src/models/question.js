'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Question.hasMany(models.SuggestedAnswers,{
        foreignKey:{
          allowNull: false,
          name:"QuestionId",
        }
      })
      models.Question.belongsTo(models.User, {
        foreignKey:{
          name :"userId",
          allowNull:false,
        }
      })
      models.Question.belongsTo(models.Type, {
        foreignKey:{
          name :"typeId",
          allowNull:false,
        }
      })
      models.Question.belongsTo(models.Theme, {
        foreignKey:{
          name :"themeId",
          allowNull:false,
        }
      })
      models.Question.belongsTo(models.Level, {
        foreignKey:{
          name :"levelId",
          allowNull:false,
        }
      })
    }
  };
  Question.init({
    content: DataTypes.TEXT,
    explain: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    themeId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};