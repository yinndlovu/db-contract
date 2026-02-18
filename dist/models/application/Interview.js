"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interview = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../sequelize"));
class Interview extends sequelize_1.Model {
}
exports.Interview = Interview;
Interview.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    applicationId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    recruiterId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("Scheduled", "Completed", "Cancelled"),
        defaultValue: "Scheduled",
    },
    scheduledDate: {
        type: sequelize_1.DataTypes.DATE,
    },
    meetingLink: {
        type: sequelize_1.DataTypes.STRING,
    },
    feedback: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, { sequelize: sequelize_2.default, modelName: "Interview", timestamps: true });
