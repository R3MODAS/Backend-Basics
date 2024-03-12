const Product = require("../models/product.models")
const ejs = require("ejs")
const path = require("path")

const rootRoute = (req, res) => {
    res.send(`<h1>Hello, This is MongoDB Basics</h1>`)
}

const getAddForm = async (req, res) => {
    try {
        ejs.renderFile(path.resolve(__dirname,'../views/add.ejs'), function(err, str){
            res.send(str);
         });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllProductsSSR = async (req, res) => {
    try {
        const products = await Product.find();
        ejs.renderFile(path.resolve(__dirname, '../views/index.ejs'), { products: products }, (err, str) => {
            res.send(str);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createProduct = async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body);
        res.json(createdProduct);
    } catch (err) {
        console.error(err.errors);
        res.status(400).json({ error: 'Validation Error' });
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const findProduct = await Product.findById(id);
        if (!findProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(findProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id

        const existingProduct = await Product.findById({ _id: id })

        if (!existingProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body)

        res.json(updatedProduct)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const deletedProduct = await Product.findByIdAndDelete({ _id: id });

        res.json(deletedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { rootRoute, createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, getAllProductsSSR, getAddForm }