const typeDefs = `#graphql

    type Category {
        name: String!
        id: ID
    }

    type Product {
        name: String!
        description: String
        image: String
        price: Float
        id: ID
        category: String
    }

    type Query {
        allCategories: [Category]
        productsCount: Int!
        allProducts: [Product]
        findProduct (name:String!): Product
    }

    type Mutation {
        addCategory (
            name: String!
        ): Category
        addProduct (
            name: String!
            description: String
            image: String
            price: Float 
            category: ID!       
        ): Product
        editPrice (
            name: String!
            price: Float!
        ): Product
        deleteProduct (name:String!): Product
    }
`;

export default typeDefs;
