import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Moderator extends Model {}

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
