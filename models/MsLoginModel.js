"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsLoginModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MsLoginModel.init(
    {
      pk_login_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      login_email: {
        type: DataTypes.STRING,
      },
      login_password: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "MsLoginModel",
    }
  );

  return MsLoginModel;
};
