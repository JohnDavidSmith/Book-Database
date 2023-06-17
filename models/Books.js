const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Books extends Model {}

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
      type: DataTypes.STRING,
      allowNull: false,
    },
    images:{
      type: DataTypes.STRING,
      allowNull: false, 
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

// Establishing the one-to-many relationship
/*Book.belongsTo(Author, {
  foreignKey: {
    allowNull: false,
  },
});

Book.belongsTo(Genre, {
  foreignKey: {
    allowNull: false,
  },
});*/

module.exports = Books;
