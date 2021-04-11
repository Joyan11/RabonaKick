import { useMainContext } from "../../context/context";
import { CartItem } from "./CartItem";
import { CartEmpty } from "./CartEmpty";
import "../../css/cart.css";
export const Cart = () => {
  const { cart, totalCartPrice, dispatch } = useMainContext();

  if (cart.length === 0) {
    return (
      <div className="cart-section empty">
        <CartEmpty />
      </div>
    );
  } else {
    return (
      <div className="cart-section">
        <div className="cart--container">
          <CartItem />
        </div>
        <h1 className="total--cart-price">
          Total price: &#8377;{totalCartPrice}
        </h1>
        <button
          className="btn btn-secondary btn--round clear--cart"
          onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      </div>
    );
  }
};
