const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const routesController = require("../controllers/routesController");

router.get("/", routesController.getHome);

module.exports = router;
