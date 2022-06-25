"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("ms_photo_item", {
        pk_photo_item_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        photo_item_name: {
          type: Sequelize.STRING,
        },
        fk_item_id: {
          type: Sequelize.INTEGER,
        },
      })
      .then(() => {
        queryInterface.addConstraint("ms_photo_item", {
          fields: ["fk_item_id"],
          type: "foreign key",
          name: "fk_ms_photo_item_fk_item_id",
          references: {
            table: "ms_item",
            field: "pk_item_id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ms_photo_item");
  },
};
