const User = require("../../models/User");

const saveLogin = async (req, res) => {
  try {
    const userEmail = await User.findOne({ where: { email: req.body.email } });

    if (!userEmail) {
      res.status(400).json({ message: "incorrect Email" });
      return;
    }

    const userPassword = await User.findOne({
      where: { password: req.body.password },
    });

    if (!userPassword) {
      res.status(400).json({ message: "incorrect Password" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userEmail.id;
      req.session.logged_in = true;

      res.json({ user: userEmail, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { saveLogin };
