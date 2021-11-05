'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.question.hasMany(models.SuggestedAnswers,{
        foreignKey:{
          allowNull: false,
          name:"questionId",
        }
      })
    }
  };
  question.init({
    content: DataTypes.TEXT,
    explain: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    themeId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};