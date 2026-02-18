import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Dispute extends Model {}

Dispute.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    escrowId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    initiatedBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    posterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    applicantId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resolutionReason: {
      type: DataTypes.STRING,
    },
    posterEvidence: {
      type: DataTypes.TEXT,
    },
    applicantEvidence: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize, modelName: "Dispute", timestamps: true },
);
