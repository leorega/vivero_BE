const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
require("./mongo");
const Plantines = require("./models/plantines");

const typeDefs = `#graphql
    type Plantin {
        name: String!
        description: String
        image: String
    }

    type Query {
        plantinesCount: Int!
        allPlantines: [Plantin]
        findPlantin(name:String!): Plantin
    }
`;

const resolvers = {
    Query: {
        plantinesCount: () => Plantines.collection.countDocuments(),
        allPlantines: () => Plantines.find({}),
        findPlantin: (root, args) => {
            const { name } = args;
            return Plantines.findOne({ name });
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
