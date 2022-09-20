const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.post("/register", wrapAsync(authControllers.registerUser));
router.post("/login", wrapAsync(authControllers.login));

module.exports = router;
