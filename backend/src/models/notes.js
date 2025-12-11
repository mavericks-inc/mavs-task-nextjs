"use strict";
import { Model } from "sequelize";

const createModel = (sequelize, DataTypes) => {
  class notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 
      notes.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }
  notes.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "notes",
      underscored: true,
    }
  );
  return notes;
};

export default createModel;
