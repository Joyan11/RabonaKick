import { useMainContext } from "../../context/context";
import { CartItem } from "./CartItem";
import { CartEmpty } from "./CartEmpty";
import { PuffLoader } from "../Loader";
import { useCartData } from "../../hooks/useCart/useCartData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "../../css/cart.css";
import { useWishlistData } from "../../hooks/useWishlist/useWishlistData";
export const Cart = () => {
  const { cart, loader, totalCartPrice, dispatch } = useMainContext();
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
