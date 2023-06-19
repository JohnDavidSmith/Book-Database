const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/users", loginRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
