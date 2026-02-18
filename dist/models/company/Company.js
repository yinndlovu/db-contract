"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Company extends sequelize_1.Model {
}
exports.Company = Company;
Company.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    industry: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    website: {
        type: sequelize_1.DataTypes.STRING,
    },
    logoURL: {
        type: sequelize_1.DataTypes.STRING,
    },
    apiKey: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    subscriptionTier: {
        type: sequelize_1.DataTypes.ENUM("PayPerPost", "Supporter", "Enterprise"),
    },
}, { sequelize: sequelize_2.default, modelName: "Company", timestamps: true });
