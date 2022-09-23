const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    shirt: {
      qty: Number,
      washtype: {
        iron: Boolean,
        wash: Boolean,
        dryclean: Boolean,
        chemical: Boolean,
      },
      price: Number,

      default: {
        qty: Number,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
        price: 0,
      },
    },
    tshirt: {
      qty: Number,
      washtype: {
        iron: Boolean,
        wash: Boolean,
        dryclean: Boolean,
        chemical: Boolean,
      },
      price: Number,
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
        price: 0,
      },
    },
    trouser: {
      qty: Number,
      washtype: {
        iron: Boolean,
        wash: Boolean,
        dryclean: Boolean,
        chemical: Boolean,
      },
      price: Number,
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
        price: 0,
      },
    },
    jeans: {
      qty: Number,
      washtype: {
        iron: Boolean,
        wash: Boolean,
        dryclean: Boolean,
        chemical: Boolean,
      },
      price: Number,
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
        price: 0,
      },
    },
    boxer: {
      qty: Number,
      washtype: {
        iron: Boolean,
        wash: Boolean,
        dryclean: Boolean,
        chemical: Boolean,
      },
      price: Number,
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
        price: 0,
      },
    },

    jogger: {
      qty: Number,
      washtype: {
        iron: Boolean,
        wash: Boolean,
        dryclean: Boolean,
        chemical: Boolean,
      },
      price: Number,
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
        price: 0,
      },
    },
    orderid: String,
    user: {
      type: String,
    }, //userID
    totalPrice: Number,
    totalQty: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
