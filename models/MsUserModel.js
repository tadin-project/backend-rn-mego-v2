"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class MsUserModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MsUserModel.belongsTo(models.MsCityModel);
      models.MsCityModel.hasMany(MsUserModel);
      MsUserModel.belongsTo(models.MsLoginModel);
      models.MsLoginModel.hasOne(MsUserModel);
    }
  }
  MsUserModel.init(
    {
      pk_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MsUserModel",
    }
  );
  return MsUserModel;
};
