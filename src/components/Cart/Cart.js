import { useMainContext } from "../../context/context";
import "../../css/cart.css";
import { CartCard, CartEmpty, PuffLoader } from "../index";
import {
  useWishlistData,
  useLocalStorage,
  useCartData,
} from "../../hooks/index";
import { clearCart } from "../../api/cart/clearCart";
import { discountCalc } from "../../utils/discount";

export const Cart = () => {
  const { cart, cartId, loader, totalCartPrice, totalDiscount, dispatch } =
    useMainContext();
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
        <div>
          <button
            className="btn btn-secondary btn--round clear--cart"
            onClick={() => clearCart(cartId, dispatch)}>
            Clear Cart
          </button>
          <div className="cart--container">
            {loader && <PuffLoader />}
            <CartCard />
          </div>
        </div>
        <div>
          <div class="card card--verticle card--l price-card">
            <div class="card--body">
              {" "}
              <span class="text text--left text-uppercase price-heading">
                Price Details
              </span>
              <p class="text text--left price-detail">
                Price: <span>&#8377;{totalCartPrice}</span>
              </p>
              <p class="text text--left price-detail">
                Discount : <span>&#8377; {totalCartPrice - totalDiscount}</span>{" "}
              </p>
              <p class="text text--left price-detail">
                Delivery : <span>Free</span>{" "}
              </p>
              <strong class="text text--left price-detail">
                Total Amount: <span>&#8377;{totalDiscount}</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
