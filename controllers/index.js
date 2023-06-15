const express = require("express");
const router = express.Router();
const homepage = require("./api/home");
const { userSignUp, saveUser } = require("./api/signup");
const { login, saveLogin } = require("./api/login");

router.get("/", homepage);
router.get("/sign-up", userSignUp);
router.post("/sign-up", saveUser);
router.get("/login", login);
router.post("/login", saveLogin);

module.exports = router;
