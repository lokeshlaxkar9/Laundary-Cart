const User = require("../models/User");

const Order = require("../models/Order");

module.exports.getHome = (req, res, next) => {
  res.send("Contoller Working");
};
module.exports.postregister = async (req, res, next) => {
  const { name, email, phone, state, address, pincode, district, password } =
    req.body;
  const newUser = await User.create({
    name,
    email,
    phone,
    state,
    address,
    pincode,
    district,
    password,
  });
  res.status(200).json({
    status: "success",
    newUser,
  });
};

module.exports.postcreateOrder = async (req, res, next) => {
  const {
    shirt,
    tshirt,
    trouser,
    jeans,
    boxer,
    jogger,
    user,
    totalPrice,
    totalQuantity,
  } = req.body;
  const orderid = "OR00" + ((await Order.countDocuments()) + 1);
  const dataFormat = {
    shirt: { qty: shirt.qty, washtype: shirt.washtype, price: shirt.price },
    tshirt: { qty: tshirt.qty, washtype: tshirt.washtype, price: tshirt.price },
    trouser: {
      qty: trouser.qty,
      washtype: trouser.washtype,
      price: trouser.price,
    },
    jeans: { qty: jeans.qty, washtype: jeans.washtype, price: jeans.price },
    boxer: { qty: boxer.qty, washtype: boxer.washtype, price: boxer.price },
    jogger: { qty: jogger.qty, washtype: jogger.washtype, price: jogger.price },
    orderid,
    user,
    totalPrice,
    totalQty: totalQuantity,
  };

  console.log(dataFormat);
  const order = await Order.create(dataFormat);
  res.send({ status: "OK", order: order });
};
