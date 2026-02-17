const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Role", timestamps: true },
);

module.exports = Role;
