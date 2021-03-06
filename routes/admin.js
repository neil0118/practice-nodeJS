const express = require("express");
const { body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

//  /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

router.get("/products", isAuth, adminController.getProducts);

//  /admin/add-product => POST
router.post(
  "/add-product",
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("imageUrl").isURL().trim(),
    body("price").isFloat().trim(),
    body("description").isString().isLength({ min: 3, max: 400 }),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get(
  "/edit-product/:productId",
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("imageUrl").isURL().trim(),
    body("price").isFloat().trim(),
    body("description").isString().isLength({ min: 3, max: 400 }),
  ],
  isAuth,
  adminController.getEditProduct
);

router.post("/edit-product", isAuth, adminController.postEditProduct);

router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
