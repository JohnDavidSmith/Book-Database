const sequelize = require("../config/connection");
const { Books } = require("../models");
const { User } = require("../models");

// const userData = require("./postData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await Books.bulkCreate(bookData);
    console.log("Books seeded successfully");
  } catch (err) {
    console.error(err);
  }

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
