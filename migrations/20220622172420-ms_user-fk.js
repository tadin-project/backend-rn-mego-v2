"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("ms_user", {
      fields: ["fk_city_id"],
      type: "foreign key",
      name: "fk_ms_user_fk_city_id",
      references: {
        table: "ms_city",
        field: "pk_city_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    queryInterface.addConstraint("ms_user", {
      fields: ["fk_login_id"],
      type: "foreign key",
      name: "fk_ms_user_fk_login_id",
      references: {
        table: "ms_login",
        field: "pk_login_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("ms_user", "fk_ms_user_fk_city_id");

    queryInterface.removeConstraint("ms_user", "fk_ms_user_fk_login_id");
  },
};
