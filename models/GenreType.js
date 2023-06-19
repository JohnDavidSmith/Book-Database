/**
 * all required variables whether it be an import or a library
 */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GenreType extends Model {} //use sequlize method for models

//create table GrenreType
GenreType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "books",
        key: "id",
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "genre",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "genretype",
  }
);

module.exports = GenreType;
