const { Router } = require("express")
const { rootRoute, createProduct, getAllProducts, updateProduct, deleteProduct, getProduct, getAllProductsSSR } = require("../controllers/product.controllers")
const router = Router()

// Routes
router
    .get("/", rootRoute)
    .get("/products", getAllProducts)
    .post("/products", createProduct)
    .get("/products/:id", getProduct)
    .put("/products/:id", updateProduct)
    .delete("/products/:id", deleteProduct)
    .get('/ssr', getAllProductsSSR)

module.exports = router