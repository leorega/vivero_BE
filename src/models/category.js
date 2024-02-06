import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        public_id: String,
        url: String,
    },
});

categorySchema.plugin(uniqueValidator);

const Category = model("Category", categorySchema);

export default Category;
