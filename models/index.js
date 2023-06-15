const Books = require("./Books");
const User = require("./User");
const Author = require("./Author");
const Genre = require("./Genre");
const Review = require("./Reviews");
const GenreType = require("./GenreType");

// Establishing the relationships
Books.belongsTo(Author, {
  foreignKey: "author_id",
});

Author.hasMany(Books, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Books, {
  through: {
    model: GenreType,
    unique: false,
  },
});

Books.belongsToMany(Genre, {
  through: {
    model: GenreType,
    unique: false,
  },
});

module.exports = { User, Books, Author, Genre, Review };
