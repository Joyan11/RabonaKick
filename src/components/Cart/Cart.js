import { useMainContext } from "../../context/context";
import "../../css/cart.css";
import { CartCard, CartEmpty, PuffLoader } from "../index";
import { useWishlistData, useCartData } from "../../hooks/index";
import { clearCart } from "../../api/cart/clearCart";
import { useAuth } from "../../context/auth-context";

export const Cart = () => {
  const { cart, cartId, loader, totalCartPrice, totalDiscount, dispatch } =
    useMainContext();
  const { token } = useAuth();
  useCartData();
  useWishlistData();

  if (cart.length === 0) {
    return (
      <div className="cart-section empty">
        {loader && <PuffLoader />}
        {loader || <CartEmpty />}
      </div>
    );
  } else {
    return (
      <div className="cart-section">
        <div>
          <button
            className="btn btn-secondary btn--round clear--cart"
            onClick={() => clearCart(cartId, dispatch, token)}>
            Clear Cart
          </button>
          <div className="cart--container">
            <CartCard />
          </div>
        </div>
        <div className="price-container">
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
