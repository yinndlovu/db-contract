"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Application extends sequelize_1.Model {
}
exports.Application = Application;
Application.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    jobId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    jobSeekerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("Pending", "Shortlisted", "Rejected", "Hired", "Withdrawn"),
        defaultValue: "Pending",
    },
    appliedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, { sequelize: sequelize_2.default, modelName: "Application", timestamps: true });
