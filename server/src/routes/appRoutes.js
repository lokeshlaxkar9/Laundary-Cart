const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const routesController = require("../controllers/routesController");

router.get("/", routesController.getHome);
router.post("/register", wrapAsync(routesController.postregister));
router.post("/create-order", wrapAsync(routesController.post_createOrder));
module.exports = router;
