const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class Rating extends Model {}

Rating.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    reviewerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ratedUserId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    jobId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    sideGigId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
    },
    message: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize, modelName: "Rating", timestamps: true },
);

module.exports = Rating;
