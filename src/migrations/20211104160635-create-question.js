'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      explain: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Users",
          key:"id",
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Types",
          key:"id",
        }
      },
      themeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Themes",
          key:"id",
        }
      },
      levelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Levels",
          key:"id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};