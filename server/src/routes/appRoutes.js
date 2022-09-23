const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const routesController = require("../controllers/routesController");

router.get("/", routesController.getHome);
router.post("/neworder", wrapAsync(routesController.postcreateOrder));
module.exports = router;
