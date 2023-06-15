const User = require("../../models/User");

const allUsers = async (req, res) => {
  await res.render("home");
};

const userSignUp = async (req, res) => {
  await res.render("sign-up");
};

const login = async (req, res) => {
  await res.render("login");
};

const saveLogin = async (req, res) => {
  const userEmail = await User.findOne({ where: { email: req.body.email } });

  if (!userEmail) {
    res.status(400).json({ message: "incorrect Email" });
    return;
  }

  const userPassword = await User.findOne({
    where: { email: req.body.password },
  });

  if (!userPassword) {
    res.status(400).json({ message: "incorrect Password" });
    return;
  }
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.json({ user: userData, message: "You are now logged in!" });
  });
};

const saveUser = async (req, res) => {
  const { firstName, lastName, email, password } = await req.body;
  const userData = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.json({ user: userData, message: "You are now logged in!" });
  });

  await res.redirect("/home");
};

module.exports = { allUsers, userSignUp, login, saveLogin, saveUser };
