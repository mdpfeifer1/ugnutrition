const typeDefs = `
type Category {
  _id: ID
  name: String
  subcategories: [Subcategory] 
}


type Subcategory {
  
  _id: ID
  name: String
  category: Category
  products: [Product]
}


  type Product {
    _id: ID
    details: String
    name: String
    description: String
    color: String
    image: String
    quantity: Int
    price: Float
    category: Category
    Subcategory: Subcategory
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    name: String
    email: String
    wishlist: [Product]
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    color: String
    details: String
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
    description: String
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String, details: String, minPrice: Float, maxPrice: Float, sortMinPrice: Boolean, sortMaxPrice: Boolean): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(name: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addWishlist(productId: String!): User
    removeWishlist(productId: String!): User
  }
`;

module.exports = typeDefs;
