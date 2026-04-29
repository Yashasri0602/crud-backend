const express = require("express");
const router = express.Router();
const productController = require('../controllers/product.controller.js');
const auth = require('../middleware/auth.middleware.js'); // Import middleware
const authController = require('../controllers/auth.controller.js');


router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/login", authController.login);
router.post("/register", authController.register);

router.post("/", auth, productController.addProduct);
router.put("/:id", auth, productController.updateProduct);
router.delete("/:id", auth, productController.deleteProduct);

module.exports = router;