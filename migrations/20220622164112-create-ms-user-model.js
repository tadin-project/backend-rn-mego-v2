"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("ms_user", {
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
      })
      .then(() => {
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
      })
      .then(() => {
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
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ms_user");
  },
};
