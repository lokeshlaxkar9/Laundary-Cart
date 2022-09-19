const mongoose = require("mongoose");
const { isEmail, isMobilePhone } = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "please enter valid email"],
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      // validate: [isMobilePhone, "please enter valid mobile number"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 16,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
