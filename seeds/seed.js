const sequelize = require("../config/connection");
const { Books, Genre, Author, Review } = require("../models");
const { User } = require("../models");
const bookData = require("./bookSeed");
const genreData = require("./genreSeed");
const authorData = require("./authorSeed");
const userData = require("./userSeed");
const reviewData = require("./reviewSeed");

// const userData = require("./postData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await User.bulkCreate(userData);
    await Review.bulkCreate(reviewData);
    await Author.bulkCreate(authorData);
    await Genre.bulkCreate(genreData);
    await Books.bulkCreate(bookData);

    console.log("Books seeded successfully");
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
};

seedDatabase();
