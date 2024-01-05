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

// export const QUERY_SINGLE_PRODUCT = gql`
//   query singleProduct($id: ID!) {
//   product(_id: $id) {
//     _id
//     category {
//       _id
//       name
//     }
//     color
//     description
//     details
//     image
//     name
//     price
//     quantity
//   }
// }
// `;

export const QUERY_USER = gql`
  query getUser {
  user {
    # _id
    # email
    name
    orders {
      _id
      purchaseDate
      products {
        _id
        # category {
        #   _id
        #   name
        # }
        color
        description
        details
        image
        name
        price
        quantity
      }
      
    }
    # wishlist {
    #   _id
    #   color
    #   image
    #   name
    #   price
    # }
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

// export const QUERY_CATEGORIES = gql`
//   query getCategories {
//   categories {
//     _id
//     name
//   }
// }
// `;
export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;


// export const QUERY_ORDER = gql`
//   query getOrder($id: ID!) {
//   order(_id: $id) {
//     __id
//     products {
//       _id
//       category {
//         _id
//         name
//       }
//       image
//       price
//       name
//       description
//       color
//     }
//   }
// }
// `;
