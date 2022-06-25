"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tr_request_item", {
      pk_request_item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      request_client: {
        type: Sequelize.INTEGER,
      },
      fk_item_id: {
        type: Sequelize.INTEGER,
      },
      request_status: {
        type: Sequelize.INTEGER,
      },
      request_renter: {
        type: Sequelize.INTEGER,
      },
      request_time: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tr_request_item");
  },
};
