const { z } = require("zod")
const Product = require("../models/product.models")

const rootRoute = (req, res) => {
    res.send(`<h1>Hello, This is MongoDB Basics</h1>`)
}

const createProduct = async (req, res) => {

    const productSchema = z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        discountPercentage: z.number().min(0).max(100),
        rating: z.number().min(0).max(5),
        stock: z.number().int().min(0),
        brand: z.string(),
        category: z.string(),
        thumbnail: z.string().url(),
        images: z.array(z.string().url())
    })

    try {
        const validatedData = productSchema.parse(req.body);
        const createdProduct = await Product.create(validatedData);
        res.json(createdProduct);
    } catch (err) {
        console.error(err.errors);
        res.status(400).json({ error: 'Validation Error' });
    }
}

const getProduct = async (req,res) => {
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

        const existingProduct = await Product.findById({_id: id})

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
        const deletedProduct = await Product.findByIdAndDelete({_id: id});

        res.json(deletedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { rootRoute, createProduct, getProduct, getAllProducts, updateProduct, deleteProduct }