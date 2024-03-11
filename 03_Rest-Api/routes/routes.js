const { Router } = require("express");
const { getAllProducts, createProduct, getProduct, updateProductEverything, updateProduct, deleteProduct } = require("../controllers/productController");
const { createUser, deleteUser, getAllUsers, getUser, updateUser, updateUserEverything } = require("../controllers/userController")

const router = Router();

router.route("/products")
    .get(getAllProducts)
    .post(createProduct)

router.route("/product/:id")
    .get(getProduct)
    .put(updateProductEverything)
    .patch(updateProduct)
    .delete(deleteProduct)

router.route("/users")
    .get(getAllUsers)
    .post(createUser)

router.route("/user/:id")
    .get(getUser)
    .put(updateUserEverything)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router