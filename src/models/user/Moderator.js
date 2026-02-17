const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Moderator extends Model {}

Moderator.init(
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Active", "InActive"),
      defaultValue: "InActive",
    },
  },
  { sequelize, modelName: "Moderator", timestamps: true },
);

module.exports = Moderator;
