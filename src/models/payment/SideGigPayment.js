const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class SideGigPayment extends Model {}

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

module.exports = SideGigPayment;
