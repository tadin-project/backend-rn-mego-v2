"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsRequestStatusModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MsRequestStatusModel.init(
    {
      pk_request_status_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MsRequestStatusModel",
    }
  );
  return MsRequestStatusModel;
};
