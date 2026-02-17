const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.ENUM("Posted", "Scrapped", "Sidegig"),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isRemote: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Active", "Closed", "Draft"),
      defaultValue: "Active",
    },
  },
  { sequelize, modelName: "Job", timestamps: true },
);

module.exports = Job;
