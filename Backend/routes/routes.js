const { Router } = require("express")
const { rootRoute, createProduct, getAllProducts, updateProduct, deleteProduct, getProduct } = require("../controllers/product.controllers")
const router = Router()

// Routes
router
    .get("/", rootRoute)
    .get("/products", getAllProducts)
    .post("/product", createProduct)
    .get("/product/:id", getProduct)
    .put("/product/:id", updateProduct)
    .delete("/product/:id", deleteProduct)

module.exports = router