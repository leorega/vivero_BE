const typeDefs = `#graphql

    type Image {
        public_id: String,
        url: String,
    }

    type Category {
        name: String!
        id: ID
        image: Image
    }

    type Product {
        name: String!
        description: String
        image: Image
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

    input ImageInput {
        public_id: String
        url: String
    }

    type Mutation {
        addCategory (
            name: String!
            image: ImageInput!
        ): Category
        addProduct (
            name: String!
            description: String
            image: ImageInput!
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
