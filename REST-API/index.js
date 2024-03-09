const app = require("./app.js")
const products = require("./product.json")
const PORT = 3000

app.get("/products", (req,res) => {
    res.json(products)
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))