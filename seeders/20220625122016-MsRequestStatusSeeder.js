"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ms_request_status",
      [
        {
          request_status_name: "Requested",
        },
        {
          request_status_name: "Confirm",
        },
        {
          request_status_name: "Decline",
        },
        {
          request_status_name: "Handover",
        },
        {
          request_status_name: "Return",
        },
        {
          request_status_name: "Reviewed",
        },
        {
          request_status_name: "Cancel",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
