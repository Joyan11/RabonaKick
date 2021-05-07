import { useMainContext } from "../../context/context";
import { CartCard } from "./CartCard";
import { CartEmpty } from "./CartEmpty";
import { PuffLoader } from "../Loader";
import { useCartData } from "../../hooks/useCart/useCartData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "../../css/cart.css";
import { useWishlistData } from "../../hooks/useWishlist/useWishlistData";
import { clearCart } from "../../api/cart/clearCart";
export const Cart = () => {
  const { cart, cartId, loader, totalCartPrice, dispatch } = useMainContext();
  useLocalStorage();
  useWishlistData();
  useCartData();
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
          {loader && <PuffLoader />}
          <CartCard />
        </div>
        <h1 className="total--cart-price">
          Total price: &#8377;{totalCartPrice}
        </h1>
        <button
          className="btn btn-secondary btn--round clear--cart"
          onClick={() => clearCart(cartId, dispatch)}>
          Clear Cart
        </button>
      </div>
    );
  }
};
