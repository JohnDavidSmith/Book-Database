const router = require("express").Router();
const { User, Author, Books, Review } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  await res.render("home");
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/logout", async (req, res) => {
  await res.redirect("/");
  return;
});

router.get("/book/:id", async (req, res) => {
  try {
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
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("/", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
