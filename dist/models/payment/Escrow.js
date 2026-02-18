"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escrow = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Escrow extends sequelize_1.Model {
}
exports.Escrow = Escrow;
Escrow.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    sideGigPaymentId: {
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
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    platformFee: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    netAmount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isDisputed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    applicantReleaseRequest: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    posterReleaseApproval: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    automaticApprovalTimeout: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("Held", "Released", "Disputed", "Refunded"),
        defaultValue: "Held",
    },
    statusReason: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "Funds are held in escrow until the job is completed or a dispute is resolved.",
    },
}, { sequelize: sequelize_2.default, modelName: "Escrow", timestamps: true });
