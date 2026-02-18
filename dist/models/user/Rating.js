"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Rating extends sequelize_1.Model {
}
exports.Rating = Rating;
Rating.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    reviewerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    ratedUserId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    jobId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
    },
    sideGigId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER,
        validate: { min: 1, max: 5 },
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, { sequelize: sequelize_2.default, modelName: "Rating", timestamps: true });
