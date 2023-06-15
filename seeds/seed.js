const sequelize = require("../config/connection");
const { Books, Genre, Author } = require("../models");
const { User } = require("../models");
const bookData = require("./bookSeed");
const genreData = require("./genreSeed");
const authorData = require("./authorSeed");

// const userData = require("./postData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await Author.bulkCreate(authorData);
    await Genre.bulkCreate(genreData);
    await Books.bulkCreate(bookData);
    console.log("Books seeded successfully");
  } catch (err) {
    console.error(err);
  }

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
