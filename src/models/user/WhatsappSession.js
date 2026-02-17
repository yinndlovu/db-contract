const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class WhatsappSession extends Model {}

WhatsappSession.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    jobSeekerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    referredCode: {
      type: DataTypes.STRING,
    },
    otpHash: {
      type: DataTypes.STRING,
    },
    redeemed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, modelName: "WhatsappSession", timestamps: true },
);

module.exports = WhatsappSession;
