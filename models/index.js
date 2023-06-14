const Books = require("./Books");
const User = require("./User");
const Author = require("./Author");
const Genre = require("./Genre");

// Establishing the relationships
Books.belongsTo(Author, {
  foreignKey: "author_id",
});

Author.hasMany(Books, {
  foreignKey: "author_id",
});

Books.belongsTo(Genre, {
  foreignKey: "genre_id",
});

Genre.hasMany(Books, {
  foreignKey: "genre_id",
});

module.exports = { User, Books, Author, Genre };