
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {}

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

  // Establishing the one-to-many relationship
Genre.hasMany(Book, {
  foreignKey: "genre_id",
});
  
  module.exports = Genre; 
