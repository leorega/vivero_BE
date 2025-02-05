import Product from "./models/product.js";
import Category from "./models/category.js";
import { uploadImage, deleteImage } from "./utils/cloudinary.js";

const resolvers = {
    Query: {
        allCategories: async () => {
            return await Category.find({});
        },
        productsCount: () => Product.collection.countDocuments(),
        allProducts: async () => {
            const products = await Product.find({}).populate("category").exec();
            return products.map((product) => {
                const category = product.category.name;
                return {
                    ...product._doc,
                    id: product._id,
                    category: category,
                };
            });
        },
        findProduct: async (root, args) => {
            const { name } = args;
            const product = await Product.findOne({ name })
                .populate("category")
                .exec();
            const category = product.category.name;
            return {
                ...product._doc,
                id: product._id,
                category: category,
            };
        },
    },
    Mutation: {
        addCategory: async (root, args) => {
            const { name, image } = args;

            const uploadedImage = await uploadImage(image);

            const category = new Category({
                name,
                image: {
                    url: uploadedImage.secure_url,
                },
            });
            return category.save();
        },
        addProduct: async (root, args) => {
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

export default resolvers;
