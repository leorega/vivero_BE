const typeDefs = `#graphql
    type Product {
        name: String!
        description: String
        image: String
        price: Float
        id: String
    }

    type Query {
        productsCount: Int!
        allProducts: [Product]
        findProduct (name:String!): Product
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
            price: Float!
        ): Product
        deleteProduct (name:String!): Product
    }
`;

module.exports = typeDefs;
