const app = require("./app.js")
const { getAllProducts, createProduct, getProduct, updateProductEverything, updateProduct, deleteProduct } = require("./controllers/productController.js")

const PORT = 3000

app.route("/products")
    .get(getAllProducts)
    .post(createProduct)

app.route("/product/:id")
    .get(getProduct)
    .put(updateProductEverything)
    .patch(updateProduct)
    .delete(deleteProduct)

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))