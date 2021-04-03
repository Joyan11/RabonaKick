import { useMainContext } from "../../context/context";
import { CartItem } from "./CartItem";
import "../../css/cart.css";
export const Cart = () => {
  const { totalCartPrice, dispatch } = useMainContext();

  return (
    <div className="cart-section">
      <div className="cart--container">
        <CartItem />
      </div>
      <h1 className="total--cart-price">
        Total price: &#8377;{totalCartPrice}
      </h1>
      <button
        className="btn btn-secondary clear--cart"
        onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
};
