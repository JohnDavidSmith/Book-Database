const router = require("express").Router();
const { Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postReviews = await Review.findAll();

    const review = postReviews.map((whatever) => whatever.get({ plain: true }));

    res.render("reviewpage", {
      review,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
//populate reviews with an api/whatever call
