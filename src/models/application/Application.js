const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Application extends Model {}

Application.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    jobId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    jobSeekerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "Pending",
        "Shortlisted",
        "Rejected",
        "Hired",
        "Withdrawn",
      ),
      defaultValue: "Pending",
    },
    appliedAt: {
      type: DataTypes.DATE,
    },
  },
  { sequelize, modelName: "Application", timestamps: true },
);

module.exports = Application;
