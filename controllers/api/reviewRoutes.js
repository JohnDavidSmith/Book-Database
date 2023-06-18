const Review = require("../../models");

const postReview = async (req, res) => {
  const message = req.body;
  const userPost = await Review.create({
    message: message,
    reviewer_id: req.session.user_id,
  });
  console.log(userPost);
  await res.redirect(303, "/reviews");
};

module.exports = { postReview };
