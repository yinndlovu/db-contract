const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Recruiter extends Model {}

Recruiter.init(
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Recruiter", timestamps: true },
);

module.exports = Recruiter;
