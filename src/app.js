const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
require("./MongoDB");
const Product = require("./models/product");

const typeDefs = `#graphql
    type Product {
        name: String!
        description: String
        image: String
        price: Float
    }

    type Query {
        productsCount: Int!
        allProducts: [Product]
        findProduct(name:String!): Product
    }

    type Mutation {
        addProduct (
            name: String!
            description: String
            image: String
            price: Float        
        ): Product
        editPrice (
            name: String!
            price: Float
        ): Product
    }
`;

const resolvers = {
    Query: {
        productsCount: () => Product.collection.countDocuments(),
        allProducts: async () => {
            return await Product.find({});
        },
        findProduct: (root, args) => {
            const { name } = args;
            return Product.findOne({ name });
        },
    },
    Mutation: {
        addProduct: (root, args) => {
            const product = new Product({ ...args });
            return product.save();
        },
        editPrice: async (root, args) => {
            const product = await Product.findOne({ name: args.name });
            product.price = args.price;
            return product.save();
        },
    },
};

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server);

    console.log(`🚀 Server ready at ${url}`);
};

startServer();
