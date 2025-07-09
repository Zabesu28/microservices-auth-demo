const express = require("express");
const router = express.Router();
const productsRoutes = require("./product.js");

router.use("/", productsRoutes);

module.exports = router;