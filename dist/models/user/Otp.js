"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Otp extends sequelize_1.Model {
}
exports.Otp = Otp;
Otp.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    otpHash: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("Verify_email", "Password_reset", "Login"),
        allowNull: false,
    },
    expiresAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    isUsed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    attempts: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
}, { sequelize: sequelize_2.default, modelName: "Otp", timestamps: true });
