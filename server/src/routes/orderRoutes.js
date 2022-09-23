const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/product/:id", wrapAsync(orderController.getproductslist));
router.get("/oid/:id", wrapAsync(orderController.getorderbyid));
router.post("/corder", wrapAsync(orderController.post_createOrder));
router.get("/history/:userid", wrapAsync(orderController.getorderhistory));
module.exports = router;
