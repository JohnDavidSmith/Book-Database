const userSignUp = async (req, res) => {
  await res.render("sign-up");
};

const login = async (req, res) => {
  await res.render("login");
};

const homepage = async (req, res) => {
  await res.render("home");
};

module.exports = { userSignUp, login, homepage };
