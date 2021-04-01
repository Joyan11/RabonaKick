import { useCart } from "../../context/context";
import { CartItem } from "./CartItem";
import "../../css/cart.css";
export const Cart = () => {
  const { totalCartPrice, clearCart } = useCart();
  return (
    <div class="cart-section">
      <div className="cart--container">
        <CartItem />
      </div>
      <h1 className="total--cart-price">Total price:{totalCartPrice}</h1>
      <button className="btn btn-secondary clear--cart" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};
