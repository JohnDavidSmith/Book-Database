const { Review, Books, Author, User } = require("../models");

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
  try {
    console.log(req.params);
    const bookData = await Books.findByPk(req.params.id, {
      include: [{ model: Author }],
    });
    const reviewsData = await Review.findAll({
      include: [{ model: User }],
      exclude: ["id"],
      where: { book_id: req.params.id },
    });
    const reviewer = reviewsData.map((msg) => msg.get({ plain: true }));
    const books = bookData.get({ plain: true });
    console.log("reviewer:", reviewer);
    console.log(reviewer[0].book_id);
    if (!bookData) {
      return res.status(404).json({ message: "Book not found" });
    }

    await res.render("review", {
      books,
      reviewer,
      book_id: reviewer[0].book_id,
      // logged_in: req.session.logged_in, // (for button to post review)
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ message: "error not logged in", error: err });
  }
};

module.exports = { userSignUp, login, homepage, reviews };
