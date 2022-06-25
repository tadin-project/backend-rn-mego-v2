"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsPhotoItemModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MsPhotoItemModel.belongsTo(models.MsItemModel);
      models.MsItemModel.hasMany(MsPhotoItemModel);
    }
  }
  MsPhotoItemModel.init(
    {
      pk_photo_item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      photo_item_name: DataTypes.STRING,
      fk_item_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MsPhotoItemModel",
    }
  );
  return MsPhotoItemModel;
};
