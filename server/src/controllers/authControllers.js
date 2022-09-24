const User = require("../models/User");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const maxAge = 24 * 60 * 2;
const createToken = (id) => {
  return jwt.sign({ id }, "secretToken", { expiresIn: maxAge });
};

module.exports.registerUser = async (req, res, next) => {
  const { name, email, phone, password, state, pincode, district, address } =
    req.body;
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new AppError("User Already Exists", 409);
  }
  const user = await User.create({
    name,
    email,
    phone,
    password,
    state,
    pincode,
    district,
    address,
  });
  res.json({ status: "registered" });
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  const token = createToken(user._id);
  res.json({
    status: "Logged In",
    token: token,
    id: user._id,
    name: user.name,
  });
};
