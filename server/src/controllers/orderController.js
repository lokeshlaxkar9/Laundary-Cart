const User = require("../models/User");

const Order = require("../models/Order");

module.exports.getproductslist = async (req, res, next) => {
  const products = await Order.find({ user: req.params.id });
  res.send(products);
};

module.exports.post_createOrder = async (req, res, next) => {
  const order = await Order.create(req.body);
  res.send(order);
};
module.exports.getorderbyid = async (req, res, next) => {
  const orderlist = await Order.findOne({ orderid: req.params.id });
  res.send(orderlist);
};
module.exports.getorderhistory = async (req, res, next) => {
  const { userid } = req.params;
  const products = await Order.find({ user: userid }).limit(10);
  res.send(products);
};
