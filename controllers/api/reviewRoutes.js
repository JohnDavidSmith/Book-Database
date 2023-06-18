const { Review } = require("../../models");

const postReview = async (req, res) => {
  console.log(req.body);
  const message = req.body.message;
  const userPost = await Review.create({
    message: message,
    user_id: req.session.user_id,
    book_id: book_id,
  });
  console.log(userPost);
  await res.redirect(303, "/reviews");
};

module.exports = { postReview };
