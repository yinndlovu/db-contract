"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recruiter = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Recruiter extends sequelize_1.Model {
}
exports.Recruiter = Recruiter;
Recruiter.init({
    userId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    companyId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
    },
    jobTitle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    department: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, { sequelize: sequelize_2.default, modelName: "Recruiter", timestamps: true });
