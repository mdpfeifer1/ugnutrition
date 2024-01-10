import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useHistory
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import '../../index.css';

const stripePromise = loadStripe('pk_test_51OKm3RHvHOESh9EaSOeeergVemhtP0R5iWKqaI0bINW1hj4eAtmQMgx9O27QZsiGNLWiRYeIUg8HqRQCG7es2yDJ001ZzJqEp9');

const Cart = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data, error }] = useLazyQuery(QUERY_CHECKOUT);
if (error) { console.log(error);}
  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
  // If so, invoke the getCart method and populate the cart with the existing data from the session
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  function submitCheckout() {

    getCheckout({
      variables: { 
        products: [...state.cart],
      },
    });
     // Redirect to the cart route after checkout
     navigate('/cart'); // Replace '/cart' with the actual path to your cart route
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" 
      onClick={toggleCart}
      >
       
      </div>
    );
  }

  return (
    <div className="cart fixed top-0 right-0 border-4 border-black rounded-lg shadow-md shadow-gray-600 mr-3 max-w-[400px] overflow-y-auto">
      <h2 className='text-center font-serif font-bold border-b-2 bg-gray-200'>Shopping Cart</h2>
      <div className="close bg-[#a22727] text-center text-white m-2 cursor-pointer rounded-lg shadow-md shadow-gray-600" onClick={toggleCart}>
        Close
      </div>
  
      {state.cart.length ? (
        <div>
          <div className='flex justify-center'>
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
  
          <div className="flex-row text-center">
            <button className='text-lg font-serif bg-[#a22727] text-white p-1 mt-3 cursor-pointer rounded-lg shadow-md shadow-gray-600 mb-2' onClick={submitCheckout}>Checkout</button>
          </div>
          <div className='text-center border-b-2 bg-gray-200'>
            <strong>Total: ${calculateTotal()}</strong>
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
