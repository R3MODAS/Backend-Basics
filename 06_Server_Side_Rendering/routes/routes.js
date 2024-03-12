const { Router } = require("express")
const { rootRoute, createProduct, getAllProducts, updateProduct, deleteProduct, getProduct, getAllProductsSSR, getAddForm } = require("../controllers/product.controllers")
const router = Router()

// Routes
router
    .get("/", rootRoute)
    .get('/ssr', getAllProductsSSR)
    .get('/add', getAddForm)
    .get("/products", getAllProducts)
    .post("/products", createProduct)
    .get("/products/:id", getProduct)
    .put("/products/:id", updateProduct)
    .delete("/products/:id", deleteProduct)

module.exports = router