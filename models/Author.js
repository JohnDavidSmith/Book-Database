/**
 * all required variables whether it be an import or a library
 */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Author extends Model {} //use sequlize method for models

//Create table Author
Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "author",
  }
);

module.exports = Author; //export
