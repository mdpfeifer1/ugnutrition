import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/images/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });
    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container mx-auto mt-10">
          <Link to="/" className="text-indigo-600 hover:text-indigo-500">
            Go Back
          </Link>

          <div className="flex flex-col md:flex-row mt-8">
            <div className="md:w-1/2">
              <img
                src={`${currentProduct.image}`}
                alt={currentProduct.name}
                className="max-w-full"
              />
            </div>

            <div className="md:w-1/2 md:ml-8">
              <h2 className="text-3xl font-bold mb-4">{currentProduct.name}</h2>
              <p className="text-gray-700 mb-6">{currentProduct.description}</p>

              <p className="text-lg text-gray-900">
                <strong>Price:</strong> ${currentProduct.price}
              </p>

              <div className="mt-4 flex">
                <button
                  className="bg-[#a22727] text-white px-4 py-2 rounded-md mr-4"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-[#a22727] text-white px-4 py-2 rounded-md mr-4:"
                  disabled={!cart.find((p) => p._id === currentProduct._id)}
                  onClick={removeFromCart}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <img src={spinner} alt="loading" />
        </div>
      ) : null}

      <Cart />
    </>
  );
}

export default Detail;