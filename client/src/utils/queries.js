import { gql } from '@apollo/client';



export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
    category {
      _id
      
    }
    color
    description
    details
    image
    name
    price
    quantity
  }
  }
`;



export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
    color
    description
    details
    image
    name
    price
    quantity
    _id
      category {
        name
      }
    }
  }
`;



export const QUERY_USER = gql`
  query getUser {
  user {
  
    name
    orders {
      _id
      purchaseDate
      products {
        _id
        color
        description
        details
        image
        name
        price
        quantity
      }
      
    }

  }
}
`;


export const QUERY_CHECKOUT = gql`
  query createCheckout($products: [ProductInput]) {
  checkout(products: $products) {
    session
  }
}
`;


export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      subcategories {
        _id
        name
        products {
          _id
          name
          description
          image
          price
          quantity
          
        }
      }
    }
  }
`;




