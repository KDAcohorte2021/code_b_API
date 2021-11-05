"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("EventInitiateds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validator: {
          notNull: {
            msg: "Please enter the duration",
          },
        },
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validator: {
          isUrl: true,
          notNull: {
            msg: "Please enter the link",
          },
        },
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: {
          notNull: {
            msg: "Please enter the code",
          },
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      enventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
      },
      themeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Themes",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("EventInitiateds");
  },
};
