const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    author: {
      type: Datatypes.STRING,
      allowNull: false,
      references: {
        model: "author",
        key: "id",
      },
    },
    genre: {
      type: Datatypes.STRING,
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
    modelName: "book",
  }
);

module.exports = Book;
