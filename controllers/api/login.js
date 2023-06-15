const login = async (req, res) => {
  try{
  await res.render("login");
  
  }
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

module.exports = { login, saveLogin };
