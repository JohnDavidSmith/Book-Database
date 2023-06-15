const { Books } = require("../models");

const bookData = [
  {
    name: "The Fellowship of the Ring",
    author_id: 1,
    // genre_id: [1, 2, 5],
  },
  {
    name: "The Two Towers",
    author_id: 1,
    // genre_id: [1, 2, 5],
  },
  {
    name: "The Return of the King",
    author_id: 1,
    // genre_id: [1, 2, 5],
  },
  {
    name: "Lord of the Flies",
    author_id: 2,
    // genre_id: [5, 10],
  },
  {
    name: "To Kill a Mockingbird",
    author_id: 3,
    // genre_id: [5, 11],
  },
  {
    name: "Watchmen",
    author_id: 4,
    // genre_id: [5, 12],
  },
  {
    name: "A Game of Thrones",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Clash of Kings",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Storm of Swords",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Feast for Crows",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Dance with Dragons",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "The Witcher",
    author_id: 6,
    // genre_id: [1, 2, 5],
  },
  {
    name: "Sword of Destiny",
    author_id: 6,
    // genre_id: [1, 2, 5],
  },
  {
    name: "And Then There Were None",
    author_id: 7,
    // genre_id: [3, 5],
  },
  {
    name: "It",
    author_id: 8,
    // genre_id: [4, 5, 11],
  },
  {
    name: "Pet Sematary",
    author_id: 8,
    // genre_id: [4, 5],
  },
  {
    name: "Carrie",
    author_id: 8,
    // genre_id: [4, 5],
  },
  {
    name: "Nineteen Eighty-Four",
    author_id: 9,
    // genre_id: [5, 13, 14],
  },
  {
    name: "One Piece Vol. 1",
    author_id: 10,
    // genre_id: [2, 5, 8],
  },
  {
    name: "One Piece Vol. 2",
    author_id: 10,
    // genre_id: [2, 5, 8],
  },
  {
    name: "Death Note",
    author_id: 10,
    // genre_id: [3, 5, 8, 15],
  },
];

// const seedBooks = () => Books.bulkCreate(bookData);

// module.exports = seedBooks;

module.exports = bookData;
