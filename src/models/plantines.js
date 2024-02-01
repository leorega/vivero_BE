const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const plantinesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
});

plantinesSchema.plugin(uniqueValidator);

const Plantines = model("Plantines", plantinesSchema);

module.exports = Plantines;
