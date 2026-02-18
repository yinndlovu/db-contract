import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Interview extends Model {}

Interview.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    applicationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    recruiterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Scheduled", "Completed", "Cancelled"),
      defaultValue: "Scheduled",
    },
    scheduledDate: {
      type: DataTypes.DATE,
    },
    meetingLink: {
      type: DataTypes.STRING,
    },
    feedback: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize, modelName: "Interview", timestamps: true },
);
