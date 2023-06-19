const withAuth = (req, res, next) => {
  if (!req.session || !req.session.logged_in) {
    res.status(401).json({ message: "Unauthroized" });
  } else {
    next();
  }
};

module.exports = withAuth;
