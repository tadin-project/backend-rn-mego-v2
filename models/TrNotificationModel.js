"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class TrNotificationModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrNotificationModel.init(
    {
      pk_notification_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_user_id: DataTypes.INTEGER,
      request_renter: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TrNotificationModel",
    }
  );
  return TrNotificationModel;
};
