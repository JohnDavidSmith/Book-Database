const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Author extends Model {}

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

// Establishing the one-to-many relationship
Author.hasMany(Book, {
  foreignKey: "author_id",
});

module.exports = Author;
