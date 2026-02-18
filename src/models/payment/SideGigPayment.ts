import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class SideGigPayment extends Model {}

SideGigPayment.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    paymentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize, modelName: "SideGigPayment", timestamps: true },
);
