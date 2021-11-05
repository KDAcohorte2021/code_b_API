"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EventInitiated extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EventInitiated.belongsTo(Model.User, {
        foreignKey: "userId",
      });
      EventInitiated.belongsTo(Model.Event, {
        foreignKey: "eventId",
      });
      EventInitiated.belongsTo(Model.Theme, {
        foreignKey: "themeId",
      });
    }
  }
  EventInitiated.init(
    {
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validator: {
          notNull: {
            msg: "Please enter the duration",
          },
        },
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUrl: true,
          notNull: {
            msg: "Please enter the link",
          },
        },
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
          notNull: {
            msg: "Please enter the code",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      enventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      themeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "EventInitiated",
    }
  );
  return EventInitiated;
};
