const User = require("../../models/User");

const saveUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
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
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { saveUser };
