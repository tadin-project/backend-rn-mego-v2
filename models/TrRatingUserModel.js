"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class TrRatingUserModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  TrRatingUserModel.init(
    {
      pk_rating_user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_user_id: DataTypes.INTEGER,
      rating_user_value: DataTypes.FLOAT,
      rating_user_comment: DataTypes.TEXT,
      rating_user_reviewers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TrRatingUserModel",
    }
  );
  return TrRatingUserModel;
};
