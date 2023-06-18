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
router.get("/reviews", reviews);

router.post("/api/sign-up", saveUser);
router.post("/api/login", saveLogin);
router.post("/api/reviews", withAuth, postReview);

module.exports = router;
