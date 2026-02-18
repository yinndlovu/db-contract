import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class ScrappedJob extends Model {}

ScrappedJob.init(
  {
    jobId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    sourceCompany: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    externalLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Scrapped", timestamps: true },
);
