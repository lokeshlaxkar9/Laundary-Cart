const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const requireAuth = (req, res, next) => {
  const { token } = req.body;
  // check json web token exist and verified
  if (token) {
    jwt.verify(token, "secretToken", (err, decodedToken) => {
      if (err) {
        throw new AppError("Invalid User");
      } else {
        // console.log(decodedToken);
        next();
      }
    });
  } else {
    throw new AppError("User NOt Logged In", 400);
  }
};

module.exports = requireAuth;
