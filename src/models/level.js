"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {}
  Level.init(
    {
      levelName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Level",
    }
  );
  return Level;
};
