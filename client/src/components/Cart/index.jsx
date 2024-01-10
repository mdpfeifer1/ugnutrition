import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  function submitCheckout() {
    getCheckout({
      variables: { 
        products: [...state.cart],
      },
    });
  
    // Redirect to the cart route after checkout
    navigate('/cart');
  
    // Close the cart
    dispatch({ type: TOGGLE_CART });
  }
  const navigate = useNavigate();
  const [state, dispatch] = useStoreContext();
  const [expanded, setExpanded] = useState(false);
  const [getCheckout, { data, error }] = useLazyQuery(QUERY_CHECKOUT);

  const toggleCart = () => {
    setExpanded(!expanded);
    if (!expanded) {
      // If opening the cart, scroll to the top to ensure visibility
      window.scrollTo(0, 0);
    } else {
      // Close the cart when the close button is clicked
      dispatch({ type: TOGGLE_CART });
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data, error]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  const handleCheckout = () => {
    getCheckout({
      variables: {
        products: [...state.cart],
      },
    });

    // Redirect to the cart route after checkout
    navigate('/cart');
    dispatch({ type: TOGGLE_CART });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}></div>
    );
  }

  return (
    <div className={`cart fixed top-0 right-0 border-4 border-black rounded-lg shadow-md shadow-gray-600 mr-3 ${expanded ? 'w-screen' : 'max-w-[400px]'} overflow-y-auto`}>
    <h2 className='text-center font-serif font-bold border-b-2 bg-gray-200'>Shopping Cart</h2>
    <div className="close bg-[#a22727] text-center text-white m-2 cursor-pointer rounded-lg shadow-md shadow-gray-600" onClick={toggleCart}>
      Close
    </div>

    {state.cart.length ? (
      <div>
          <div className='flex flex-wrap justify-center bg-gray-200 p-6 rounded-lg shadow-md border-2'>
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          <div className="flex-row text-center">
            <button className='text-lg font-serif bg-[#a22727] text-white p-1 mt-2 cursor-pointer rounded-lg shadow-md shadow-gray-600 mb-2' onClick={handleCheckout}>
              Checkout
            </button>
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