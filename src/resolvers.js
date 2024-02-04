const Product = require("./models/product");

const resolvers = {
    Query: {
        productsCount: () => Product.collection.countDocuments(),
        allProducts: async () => {
            return await Product.find({});
        },
        findProduct: async (root, args) => {
            const { name } = args;
            return await Product.findOne({ name });
        },
    },
    Mutation: {
        addProduct: (root, args) => {
            const product = new Product({ ...args });
            return product.save();
        },
        editPrice: async (root, args) => {
            const product = await Product.findOne({ name: args.name });
            if (!product) return;
            product.price = args.price;
            return product.save();
        },
        deleteProduct: async (root, args) => {
            const deletedProduct = await Product.findOneAndDelete({
                name: args.name,
            });
            if (!deletedProduct) return;
            return deletedProduct;
        },
    },
};

module.exports = resolvers;
