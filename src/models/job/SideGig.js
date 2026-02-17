const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class SideGig extends Model {}

SideGig.init(
  {
    jobId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    posterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
    },
  },
  { sequelize, modelName: "SideGig", timestamps: true },
);

module.exports = SideGig;
