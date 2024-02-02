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
`;

const resolvers = {
    Query: {
        productsCount: () => Product.collection.countDocuments(),
        allProducts: () => Product.find({}),
        findProduct: (root, args) => {
            const { name } = args;
            return Product.findOne({ name });
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
