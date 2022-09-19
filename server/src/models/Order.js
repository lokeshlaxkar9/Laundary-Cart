const mongoose = require("mongoose");
const User = require("./User");

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
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
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
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
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
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
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
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
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
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
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
      default: {
        qty: 0,
        washtype: {
          iron: false,
          wash: false,
          dryclean: false,
          chemical: false,
        },
      },
    },
    orderid: String,
    user: {
      type: String,
    }, //userID
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
