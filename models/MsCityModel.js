"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsCityModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MsCityModel.init(
    {
      pk_city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      city_name: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "MsCityModel",
    }
  );
  return MsCityModel;
};
