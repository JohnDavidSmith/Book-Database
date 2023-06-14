const router = require("express").Router();
const { Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postReviews = await Review.findAll(); //how do i get what i need from my model here

    const review = postReviews.map((whatever) => whatever.get({ plain: true })); //what is the variable in the maop couldnt find it in the activities

    res.render("reviewpage", {
      review,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//do i need to add a router.get('/login') portion here to make sure they must be logged in in order to be at this point in the page

module.exports = router;
