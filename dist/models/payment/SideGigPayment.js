"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideGigPayment = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class SideGigPayment extends sequelize_1.Model {
}
exports.SideGigPayment = SideGigPayment;
SideGigPayment.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    paymentId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
}, { sequelize: sequelize_2.default, modelName: "SideGigPayment", timestamps: true });
