"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappSession = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class WhatsappSession extends sequelize_1.Model {
}
exports.WhatsappSession = WhatsappSession;
WhatsappSession.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    jobSeekerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    referredCode: {
        type: sequelize_1.DataTypes.STRING,
    },
    otpHash: {
        type: sequelize_1.DataTypes.STRING,
    },
    redeemed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    expiresAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, { sequelize: sequelize_2.default, modelName: "WhatsappSession", timestamps: true });
