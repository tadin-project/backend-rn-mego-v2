"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tr_rating_user", {
      pk_rating_user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fk_user_id: {
        type: Sequelize.INTEGER,
      },
      rating_user_value: {
        type: Sequelize.FLOAT,
      },
      rating_user_comment: {
        type: Sequelize.TEXT,
      },
      rating_user_reviewers: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tr_rating_user");
  },
};
