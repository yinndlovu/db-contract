const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Escrow extends Model {}

Escrow.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sideGigPaymentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    posterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    applicantId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    platformFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    netAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDisputed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    applicantReleaseRequest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    posterReleaseApproval: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    automaticApprovalTimeout: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Held", "Released", "Disputed", "Refunded"),
      defaultValue: "Held",
    },
    statusReason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "Funds are held in escrow until the job is completed or a dispute is resolved.",
    },
  },
  { sequelize, modelName: "Escrow", timestamps: true },
);

module.exports = Escrow;
