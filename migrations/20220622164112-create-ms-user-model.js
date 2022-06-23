"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ms_user", {
      pk_user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_telp: {
        type: Sequelize.STRING,
      },
      user_bio: {
        type: Sequelize.TEXT,
      },
      user_photoprofile: {
        type: Sequelize.TEXT,
      },
      fk_login_id: {
        type: Sequelize.INTEGER,
      },
      fk_city_id: {
        type: Sequelize.INTEGER,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ms_user");
  },
};
