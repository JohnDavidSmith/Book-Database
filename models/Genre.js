/**
 * all required variables whether it be an import or a library
 */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {} //use sequlize method for models

//create table Genre
Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "genre",
  }
);

module.exports = Genre;
