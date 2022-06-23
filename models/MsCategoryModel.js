"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsCategoryModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MsCategoryModel.init(
    {
      pk_category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "MsCategoryModel",
    }
  );
  return MsCategoryModel;
};
