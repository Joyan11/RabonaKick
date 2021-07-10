import { useMainContext } from "../../context/context";
import "../../css/cart.css";
import { CartCard, CartEmpty, PuffLoader } from "../index";
import { clearCart } from "../../api/cart/clearCart";

export const Cart = () => {
  const { cart, loader, totalCartPrice, totalDiscount, dispatch } =
    useMainContext();

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
            onClick={() => clearCart(dispatch)}>
            Clear Cart
          </button>
          <div className="cart--container">
            <CartCard />
          </div>
        </div>
        <div className="price-container">
          <div className="card card--verticle card--l price-card">
            <div className="card--body">
              {" "}
              <span className="text text--left text-uppercase price-heading">
                Price Details
              </span>
              <p className="text text--left price-detail">
                Price: <span>&#8377;{totalCartPrice}</span>
              </p>
              <p className="text text--left price-detail">
                Discount : <span>&#8377; {totalCartPrice - totalDiscount}</span>{" "}
              </p>
              <p className="text text--left price-detail">
                Delivery : <span>Free</span>{" "}
              </p>
              <strong className="text text--left price-detail">
                Total Amount: <span>&#8377;{totalDiscount}</span>
              </strong>
              <button
                className="btn btn--round btn-primary"
                style={{ paddingTop: "1rem" }}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
