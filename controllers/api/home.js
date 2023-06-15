const homepage = async (req, res) => {
  await res.render("home");
};

module.exports = homepage;
