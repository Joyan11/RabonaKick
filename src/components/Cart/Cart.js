/** @format */
import axios from "axios";
import { useMainContext } from "../../context/context";
import "../../css/cart.css";
import { CartCard, CartEmpty, PuffLoader } from "../index";
import { clearCart } from "../../api/cart/clearCart";
import { toastMessages } from "../../utils/toastMessages";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router";
import { useState } from "react";

function loadRazorPay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

export const Cart = () => {
  const { cart, loader, totalCartPrice, totalDiscount, dispatch } =
    useMainContext();
  const [loading, setLoading] = useState(false);
  const { userData } = useAuth();
  const navigate = useNavigate();
  async function displayRazorPay() {
    let orderdata;
    try {
      setLoading(true);
      const res = await loadRazorPay();
      if (!res) {
        toastMessages("Something went wrong");
        setLoading(false);
        return;
      }
      const { data } = await axios.post(
        "https://rabonaserver.joyan11.repl.co/razorpay/orders",
        {
          cart: cart,
        }
      );
      orderdata = data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    var options = {
      key: "rzp_test_1IrqF0FiK0YEV0",
      amount: orderdata.amount,
      currency: orderdata.currency,
      name: "RabonaKick Payment",
      description: "Proceed with payment details",
      order_id: orderdata.id,
      handler: function (response) {
        console.log(response);
        toastMessages("Payment successful");
        clearCart(dispatch);
        navigate("/products");
      },
      prefill: {
        name: userData.firstName + userData.lastName,
        email: userData.email,
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
                style={{ paddingTop: "1rem" }}
                disabled={loading && true}
                onClick={displayRazorPay}>
                {loading ? "loading..." : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
