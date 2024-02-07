import { Schema, model, mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },

    price: {
        type: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    image: {
        public_id: String,
        url: String,
    },
});

productSchema.plugin(uniqueValidator);

const Product = model("Product", productSchema);

export default Product;
