"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class UserRole extends sequelize_1.Model {
}
exports.UserRole = UserRole;
UserRole.init({
    userId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
    },
    roleId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
    },
}, { sequelize: sequelize_2.default, modelName: "UserRole", timestamps: true });
