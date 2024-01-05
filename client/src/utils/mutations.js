import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
  addOrder(products: $products) {
    _id
    purchaseDate
    products {
      
      category {
        # _id
        name
      }
      _id
      color
      description
      # image
      name
      price
    }
   
  }
}
`;

export const UPDATE_USER = gql`
  mutation updateUser($name: String, $email: String, $password: String) {
  updateUser(name: $name, email: $email, password: $password) {
    _id
    email
    name
    orders {
      _id
      products {
        _id
      }
    }
  }
}
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $quantity: Int!) {
  updateProduct(_id: $id, quantity: $quantity) {
    _id
    category {
      _id
      name
    }
    color
    name
    price
    quantity
    description
    details
    image
  }
}
`;

export const ADD_WISHLIST = gql`
 mutation addWishlist($productId: String!) {
  addWishlist(productId: $productId) {
    _id
    email
    name
    wishlist {
      _id
      color
      description
      image
      name
      price
    }
  }
}
`;

export const REMOVE_WISHLIST = gql`
 mutation removeWishlist($productId: String!) {
  removeWishlist(productId: $productId) {
    _id
    email
    name
    wishlist {
      _id
      color
      description
      image
      name
      price
    }
  }
}
`;