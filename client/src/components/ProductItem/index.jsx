import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    color,
    description,
    details,
    image,
    name,
    price,
    quantity,
    _id,
    // category
    
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }


  return (
    <div>
      <div key={_id} className="bg-gray-400 p-6 rounded-lg shadow-md border-4 border-black/20 flex flex-col h-full justify-center">
        <h4 className="text-black pb-3 h-5 overflow-hidden">
          {description} <br />
          <span style={{ fontSize: '1rem' }}>
            {color}
          </span>
        </h4>
  
        <div className="mb-4" style={{ marginTop: '-80px' }}>
          <img
            className="border-4 border-black w-full h-40 object-cover object-center rounded-xl"
            src={image}
            alt={`Product ${_id}`}
          />
        </div>
  
        <h3 className="font-bold text-lg text-center font-serif">{name}</h3>
        <p className="text-white text-lg font-serif ">{details}</p>
        <div className="font-serif mt-2">{quantity} {pluralize("item", quantity)} in stock</div>
        <Link
          className="btn btn-primary btn-block btn-squared underline max-w-[90px]"
          to={`/products/${_id}`}
        >
          View Details
        </Link>
  
        <span className="text-black font-serif max-w-[90px]">${price}</span>
       
  
        <button onClick={addToCart} className="btn btn-primary border-2 border-white btn-block btn-squared bg-black text-white rounded-2xl max-w-[150px] min-w-[130px] mx-auto mt-5 hover:min-w-[132px] hover:bg-[--Gold] hover:text-black hover:font-semibold">
          Add to cart
        </button>
      </div>
    </div>
  );
  
}

export default ProductItem;


  // return (
  //   <div className="card px-1 py-1">
  //     <Link to={`/products/${_id}`}>
  //       <img
  //         alt={name}
  //         src={`/images/${image}`}
  //       />
  //       <p>{name}</p>
  //     </Link>
  //     <div>
  //       <div>{quantity} {pluralize("item", quantity)} in stock</div>
  //       <span>${price}</span>
  //     </div>
  //     <button onClick={addToCart}>Add to cart</button>
  //   </div>
  // );