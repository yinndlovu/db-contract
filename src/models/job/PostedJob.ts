import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class PostedJob extends Model {}

PostedJob.init(
  {
    jobId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    recruiterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    employmentType: {
      type: DataTypes.ENUM(
        "Full_Time",
        "Part_Time",
        "Contract",
        "Internship",
        "Learnership",
        "Volunteering",
        "Freelancing",
      ),
    },
    experienceLevel: {
      type: DataTypes.ENUM("Entry-level", "Mid-level", "Experienced"),
    },
    salaryMin: {
      type: DataTypes.INTEGER,
    },
    salaryMax: {
      type: DataTypes.INTEGER,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutRole: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    responsibilities: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    benefits: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    requiredSkills: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    niceToHaveSkills: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    minYearsExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    educationLevel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    viewsCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    applicationsCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: "PostedJob", timestamps: true },
);
