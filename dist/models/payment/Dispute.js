"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispute = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Dispute extends sequelize_1.Model {
}
exports.Dispute = Dispute;
Dispute.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    escrowId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    initiatedBy: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    posterId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    applicantId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    reason: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    resolution: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    resolutionReason: {
        type: sequelize_1.DataTypes.STRING,
    },
    posterEvidence: {
        type: sequelize_1.DataTypes.TEXT,
    },
    applicantEvidence: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, { sequelize: sequelize_2.default, modelName: "Dispute", timestamps: true });
