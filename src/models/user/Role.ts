import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Role extends Model {}

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
