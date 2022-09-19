const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const routesController = require("../controllers/routesController");

router.get("/", routesController.getHome);

router.post("/create-order", wrapAsync(routesController.post_createOrder));
module.exports = router;
