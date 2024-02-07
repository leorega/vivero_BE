import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        url: {
            type: String,
            required: true,
        },
    },
});

categorySchema.plugin(uniqueValidator);

const Category = model("Category", categorySchema);

export default Category;
