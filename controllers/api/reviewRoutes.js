const router = require("express").Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body.message);
    console.log(req.body.bookid);
    console.log("Zain is a god");
    const message = req.body.message;
    const userPost = await Review.create({
      message: message,
      user_id: req.session.user_id,
      book_id: req.body.bookid,
    });
    res.status(200).json(userPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
