"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Job extends sequelize_1.Model {
}
exports.Job = Job;
Job.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("Posted", "Scrapped", "Sidegig"),
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isRemote: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("Active", "Closed", "Draft"),
        defaultValue: "Active",
    },
}, { sequelize: sequelize_2.default, modelName: "Job", timestamps: true });
