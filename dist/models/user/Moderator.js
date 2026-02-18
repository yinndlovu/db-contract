"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moderator = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Moderator extends sequelize_1.Model {
}
exports.Moderator = Moderator;
Moderator.init({
    userId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("Active", "InActive"),
        defaultValue: "InActive",
    },
}, { sequelize: sequelize_2.default, modelName: "Moderator", timestamps: true });
