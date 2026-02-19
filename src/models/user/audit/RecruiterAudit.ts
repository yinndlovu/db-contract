import { DataTypes, Model } from "sequelize";
import sequelize from "../../../sequelize";

export class RecruiterAudit extends Model{}
RecruiterAudit.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    event:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    recruiterId: {
      type: DataTypes.UUID,
   allowNull:false
    }
    
    
},  { sequelize, modelName: "RecruiterAudit", timestamps: true },) 