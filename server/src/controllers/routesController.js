const Order = require("../models/Order");

module.exports.getHome = (req, res, next) => {
  res.send("Contoller Working");
};

module.exports.post_createOrder = async (req, res, next) => {
  const order = await Order.create(req.body);
  res.send(order);
};
