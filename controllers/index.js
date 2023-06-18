const express = require("express");
const router = express.Router();
const { homepage, userSignUp, login, reviews } = require("./viewRoutes");

const withAuth = require("../utils/auth");

const { saveUser } = require("./api/signupRoutes");
const { saveLogin } = require("./api/loginRoutes");
const { postReview } = require("./api/reviewRoutes");

router.get("/", homepage);
router.get("/sign-up", userSignUp);
router.get("/login", login);
router.get("/book/:id", reviews);

router.post("/sign-up", saveUser);
router.post("/login", saveLogin);
router.post("/reviews", withAuth, postReview);

module.exports = router;
