import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { TiDelete } from "react-icons/ti";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row ml-4">
      <div>
        <img
          src={`${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div className="font-serif">{item.name}, ${item.price}</div>
        <div className="flex">
          <span className="font-serif">Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
            className="max-w-[60px] font-semibold font-sans"
          />
          <span
            className="text-lg cursor-pointer"
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
           <TiDelete />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
