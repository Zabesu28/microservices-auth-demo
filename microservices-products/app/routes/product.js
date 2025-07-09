const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/product.js");

router.post("/", productCtrl.create);
router.get("/", productCtrl.readAll);
router.get("/:id", productCtrl.readOne);
router.put("/:id", productCtrl.update);
router.delete("/:id", productCtrl.remove);

module.exports = router;
