"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrappedJob = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class ScrappedJob extends sequelize_1.Model {
}
exports.ScrappedJob = ScrappedJob;
ScrappedJob.init({
    jobId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    sourceCompany: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    externalLink: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: sequelize_2.default, modelName: "Scrapped", timestamps: true });
