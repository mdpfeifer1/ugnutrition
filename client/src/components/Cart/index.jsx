import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import '../../index.css';
// import { FaShoppingCart } from 'react-icons/fa';
// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe('pk_test_51OKm3RHvHOESh9EaSOeeergVemhtP0R5iWKqaI0bINW1hj4eAtmQMgx9O27QZsiGNLWiRYeIUg8HqRQCG7es2yDJ001ZzJqEp9');

const Cart = () => {
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
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" 
      // onClick={toggleCart}
      >
        {/* <FaShoppingCart className="text-2xl text-black" role='img' /> */}
      </div>
    );
  }

   {/* Adjust the size with text-2xl or other utility classes */}


  return (
    <div className="cart">
      <div className="close bg-[--Navy] text-center text-white m-2 cursor-pointer rounded-lg shadow-md shadow-gray-600" onClick={toggleCart}>
        Close
      </div>
      <h2 className='text-center font-serif'>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row text-center">
            {/* Check to see if the user is logged in. If so render a button to check out */}
            {Auth.loggedIn() ? (
              <button className='text-lg font-serif bg-[--Navy] text-white p-1 rounded-2xl mt-3' onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
            
          </div>
          <strong>Total: ${calculateTotal()}</strong>
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
