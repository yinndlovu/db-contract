"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSeeker = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class JobSeeker extends sequelize_1.Model {
}
exports.JobSeeker = JobSeeker;
JobSeeker.init({
    userId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    credits: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 6,
    },
    balance: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
    },
    subscriptionTier: {
        type: sequelize_1.DataTypes.ENUM("Free", "Supporter"),
        defaultValue: "Free",
    },
    subscriptionValidUntil: {
        type: sequelize_1.DataTypes.DATE,
    },
    subscriptionValid: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    averageRating: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    latitude: {
        type: sequelize_1.DataTypes.DECIMAL(10, 8),
    },
    longitude: {
        type: sequelize_1.DataTypes.DECIMAL(11, 8),
    },
    refCode: {
        type: sequelize_1.DataTypes.STRING,
    },
    totalReferrals: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    optInForSideGigs: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    referredBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    resumeTemplate: {
        type: sequelize_1.DataTypes.ENUM("Minimal", "Professional", "Corporate"),
        defaultValue: "Minimal",
    },
    coverLetterTemplate: {
        type: sequelize_1.DataTypes.ENUM("Basic", "Professional"),
        defaultValue: "Basic",
    },
    resumeTemplateJson: {
        type: sequelize_1.DataTypes.TEXT,
    },
    scrappedJobs: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    foundJobsToday: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
}, { sequelize: sequelize_2.default, modelName: "JobSeeker", timestamps: true });
