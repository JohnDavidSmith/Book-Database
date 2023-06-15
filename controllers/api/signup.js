const userSignUp = async (req, res) => {
  await res.render("sign-up");
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

module.exports = { saveUser, userSignUp };
