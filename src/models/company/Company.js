const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Company extends Model {}

Company.init(
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
    industry: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    logoURL: {
      type: DataTypes.STRING,
    },
    apiKey: {
      type: DataTypes.STRING,
      unique: true,
    },
    subscriptionTier: {
      type: DataTypes.ENUM("PayPerPost", "Supporter", "Enterprise"),
    },
  },
  { sequelize, modelName: "Company", timestamps: true },
);

module.exports = Company;
