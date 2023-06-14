const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { title: "Explore" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
