const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discountPercentage: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product