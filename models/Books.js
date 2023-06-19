/**
 * all required variables whether it be an import or a library
 */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Books extends Model {}//use sequlize method for models

//create table Books
Books.init(
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
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "author",
        key: "id",
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "image",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "books",
  }
);

module.exports = Books;
