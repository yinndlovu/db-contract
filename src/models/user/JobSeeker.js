const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../sequelize");

class JobSeeker extends Model {}

JobSeeker.init(
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    credits: {
      type: DataTypes.INTEGER,
      defaultValue: 6,
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    subscriptionTier: {
      type: DataTypes.ENUM("Free", "Supporter"),
      defaultValue: "Free",
    },
    subscriptionValidUntil: {
      type: DataTypes.DATE,
    },
    subscriptionValid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    averageRating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    address: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
    },
    refCode: {
      type: DataTypes.STRING,
    },
    totalReferrals: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    optInForSideGigs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    referredBy: {
      type: DataTypes.INTEGER,
    },
    resumeTemplate: {
      type: DataTypes.ENUM("Minimal", "Professional", "Corporate"),
      defaultValue: "Minimal",
    },
    coverLetterTemplate: {
      type: DataTypes.ENUM("Basic", "Professional"),
      defaultValue: "Basic",
    },
    resumeTemplateJson: {
      type: DataTypes.TEXT,
    },
    scrappedJobs: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    foundJobsToday: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: "JobSeeker", timestamps: true },
);

module.exports = JobSeeker;
