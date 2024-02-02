const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

categorySchema.plugin(uniqueValidator);

const Category = model("Category", categorySchema);

module.exports = Category;
