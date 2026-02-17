const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Payment extends Model {}

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

module.exports = Payment;
