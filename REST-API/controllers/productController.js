const products = require("../product.json")

const getAllProducts = (req, res) => {
    res.json(products)
}

const getProduct = (req, res) => {
    const id = +req.params.id
    const product = products.find((p) => p.id === id)
    if (!product) {
        res.status(404).json({
            success: false,
            message: "Product not Found"
        })
    }
    res.json({
        success: true,
        product
    })
}

const createProduct = (req, res) => {
    const newProduct = req.body
    if (!newProduct) {
        res.status(404).json({
            success: false,
            message: "Cannot create product"
        })
    }
    products.push(newProduct)
    res.json({
        success: true,
        newProduct
    })
}

const updateProductEverything = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { id: id, ...req.body })
    res.json(products)
}

const updateProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.json(products)
}

const deleteProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    const deletedProduct = products.splice(productIndex, 1)
    res.json(deletedProduct)
}

module.exports = {getAllProducts, getProduct, createProduct, updateProduct, updateProductEverything, deleteProduct}