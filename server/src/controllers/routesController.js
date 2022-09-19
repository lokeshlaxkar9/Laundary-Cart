const User=require("../models/User");

module.exports.getHome = (req, res, next) => {
  res.send("Contoller Working");
};
module.exports.postregister =async (req, res, next) => {
  const {name,email,phone,state,address,pincode,district,password}=req.body;
  const newUser=await User.create({
    name,
    email,
    phone,
    state,
    address,
    pincode,
    district,
    password
  })
  res.status(200).json({
    status:"success",
    newUser
  })
};
