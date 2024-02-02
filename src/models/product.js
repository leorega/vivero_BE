const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
});

productSchema.plugin(uniqueValidator);

const Product = model("Product", productSchema);

module.exports = Product;
