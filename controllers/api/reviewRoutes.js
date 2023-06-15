const Review = require("../../models");

const postReview = async (req, res) => {
  const message = await req.body;
  const userPost = await Review.create({ message: message });
  console.log(userPost);
};

module.exports = { postReview };
