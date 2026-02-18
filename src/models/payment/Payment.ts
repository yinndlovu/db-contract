import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("Subscription", "Sidegig", "Boost"),
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Completed", "Failed", "Refunded"),
      defaultValue: "pending",
    },
  },
  { sequelize, modelName: "Payment", timestamps: true },
);
