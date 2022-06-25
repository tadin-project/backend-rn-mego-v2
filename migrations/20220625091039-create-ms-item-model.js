"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("ms_item", {
        pk_item_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        item_name: {
          type: Sequelize.STRING,
        },
        item_price: {
          type: Sequelize.FLOAT,
        },
        item_description: {
          type: Sequelize.TEXT,
        },
        fk_category_id: {
          type: Sequelize.INTEGER,
        },
        fk_user_id: {
          type: Sequelize.INTEGER,
        },
      })
      .then(() => {
        queryInterface.addConstraint("ms_item", {
          fields: ["fk_user_id"],
          type: "foreign key",
          name: "fk_ms_item_fk_user_id",
          references: {
            table: "ms_user",
            field: "pk_user_id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
      })
      .then(() => {
        queryInterface.addConstraint("ms_item", {
          fields: ["fk_category_id"],
          type: "foreign key",
          name: "fk_ms_item_fk_category_id",
          references: {
            table: "ms_category",
            field: "pk_category_id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ms_item");
  },
};
