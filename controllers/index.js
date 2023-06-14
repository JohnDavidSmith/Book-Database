const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homePage");
// const reviewsRoutes = require("./reviewRoute.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/reviews", reviewsRoutes);

module.exports = router;
