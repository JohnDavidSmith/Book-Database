const { Review, Books, Author } = require("../models");

const userSignUp = async (req, res) => {
  await res.render("sign-up");
};

const login = async (req, res) => {
  await res.render("login");
};

const homepage = async (req, res) => {
  await res.render("home");
};

const reviews = async (req, res) => {
  const bookData = await Books.findByPk(req.params.id, {
    include: [{ model: Author }],
  });
  const reviewsData = await Review.findAll({ exclude: ["id"] });
  const reviewer = reviewsData.map((msg) => msg.get({ plain: true }));
  const books = bookData.get({ plain: true });

  await res.render("review", {
    books,
    reviewer,
    logged_in: req.session.logged_in,
  });
};

module.exports = { userSignUp, login, homepage, reviews };
