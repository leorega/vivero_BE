import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "./MongoDB.js";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server);

    console.log(`🚀 Server ready at ${url}`);
};

startServer();
