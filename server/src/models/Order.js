const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
        dryclean: false,
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
        dryclean: false,
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
        dryclean: false,
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
        dryclean: false,
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
        dryclean: false,
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
        dryclean: false,
      },
    },
  },
  orderdate: {
    type: String,
  },
  orderid: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }, //userID
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
