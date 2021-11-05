'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Level.hasMany(models.Question,{
        foreignKey:{
          name: "levelId",
          allowNull:false,
        }
      })
    }
  };
  Level.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};