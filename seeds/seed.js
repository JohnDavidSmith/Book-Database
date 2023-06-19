/**
 * all required variables whether it be an import or a library
 */
const sequelize = require("../config/connection");
const { Books, Genre, Author, Review } = require("../models");
const { User } = require("../models");
const bookData = require("./bookSeed");
const genreData = require("./genreSeed");
const authorData = require("./authorSeed");
const userData = require("./userSeed");
const reviewData = require("./reviewSeed");
/**
 * fucntion for seeding the tables
 */
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await Author.bulkCreate(authorData);
    await Books.bulkCreate(bookData);
    await User.bulkCreate(userData);
    await Review.bulkCreate(reviewData);
    await Genre.bulkCreate(genreData);

    console.log("Books seeded successfully");
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
};

seedDatabase();
