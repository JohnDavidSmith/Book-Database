const express = require("express");
const {
  allUsers,
  userSignUp,
  login,
  saveLogin,
  saveUser,
} = require("./api/user");
const router = express.Router();

router.get("/home", allUsers);
router.get("/sign-up", userSignUp);
router.post("/sign-up", saveUser);
router.get("/login", login);
router.post("/login", saveLogin);

module.exports = router;
