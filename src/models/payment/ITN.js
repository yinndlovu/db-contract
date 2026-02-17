const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class ITN extends Model {}

ITN.init(
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
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "ITN", timestamps: true },
);

module.exports = ITN;
