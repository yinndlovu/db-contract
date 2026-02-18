import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class UserRole extends Model {}

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
