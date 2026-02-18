"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostedJob = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class PostedJob extends sequelize_1.Model {
}
exports.PostedJob = PostedJob;
PostedJob.init({
    jobId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    recruiterId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    companyId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    employmentType: {
        type: sequelize_1.DataTypes.ENUM("Full_Time", "Part_Time", "Contract", "Internship", "Learnership", "Volunteering", "Freelancing"),
    },
    experienceLevel: {
        type: sequelize_1.DataTypes.ENUM("Entry-level", "Mid-level", "Experienced"),
    },
    salaryMin: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    salaryMax: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    aboutRole: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    responsibilities: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    requirements: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    benefits: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    requiredSkills: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
    },
    niceToHaveSkills: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
    },
    minYearsExperience: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    educationLevel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    expiresAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    viewsCount: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    applicationsCount: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
}, { sequelize: sequelize_2.default, modelName: "PostedJob", timestamps: true });
