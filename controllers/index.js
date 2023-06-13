const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homePage.js");
const reviewsRoutes = require("./reviewRoute.js"); //should this be placed within the api directory or does it matter

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/reviews", reviewsRoutes);

module.exports = router;
