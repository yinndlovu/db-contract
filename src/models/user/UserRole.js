const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class UserRole extends Model {}

UserRole.init(
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    roleId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  },
  { sequelize, modelName: "UserRole", timestamps: true },
);

module.exports = UserRole;
