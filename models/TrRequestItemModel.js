"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class TrRequestItemModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrRequestItemModel.init(
    {
      pk_request_item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      request_client: DataTypes.INTEGER,
      fk_item_id: DataTypes.INTEGER,
      request_status: DataTypes.INTEGER,
      request_renter: DataTypes.INTEGER,
      request_time: DataTypes.DATETIME,
    },
    {
      sequelize,
      modelName: "TrRequestItemModel",
    }
  );
  return TrRequestItemModel;
};
