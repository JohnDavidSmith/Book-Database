const router = require("express").Router();
const withAuth = require("../utils/auth.js");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(400).json(err);
  }
});

//how do i let them just view the homepage
//tell them they need to login before going any further but still lets them view the homepage
//do I need the api information in here?
