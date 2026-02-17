const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Scrapped extends Model {}

Scrapped.init(
  {
    jobId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    sourceCompany: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    externalLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Scrapped", timestamps: true },
);

module.exports = Scrapped;
