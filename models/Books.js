const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
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
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "author",
        key: "id",
      },
    },
    genre: {
      type: DataTypes.STRING,
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

// Establishing the one-to-many relationship
Book.belongsTo(Author, {
  foreignKey: {
    allowNull: false,
  },
});

Book.belongsTo(Genre, {
  foreignKey: {
    allowNull: false,
  },
});

module.exports = Book;
