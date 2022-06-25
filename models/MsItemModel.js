"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsItemModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MsItemModel.belongsTo(models.MsUserModel);
      models.MsUserModel.hasMany(MsItemModel);
      MsItemModel.belongsTo(models.MsCategoryModel);
      models.MsCategoryModel.hasMany(MsItemModel);
    }
  }
  MsItemModel.init(
    {
      pk_item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      item_name: DataTypes.STRING,
      item_price: DataTypes.FLOAT,
      item_description: DataTypes.TEXT,
      fk_category_id: DataTypes.INTEGER,
      fk_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MsItemModel",
    }
  );
  return MsItemModel;
};
