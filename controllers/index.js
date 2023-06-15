const express = require("express");
const router = express.Router();
const { homepage, userSignUp, login } = require("./viewRoutes");
const { saveUser } = require("./api/signupRoutes");
const { saveLogin } = require("./api/loginRoutes");

router.get("/", homepage);
router.get("/sign-up", userSignUp);
router.get("/login", login);

router.post("/sign-up", saveUser);
router.post("/login", saveLogin);

module.exports = router;
