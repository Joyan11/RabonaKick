/** @format */

import { useMainContext } from "../../context/context";
import { setQuantity } from "../../api/cart/setQuantity";
import { removeFromCart } from "../../api/cart/removeFromCart";
import { discountCalc } from "../../utils/discount";
import { Link } from "react-router-dom";
import { DotsLoader } from "../Loaders/Loaders";

export const CartCard = () => {
  const { cart, cartactionLoader, incDecLoader, dispatch } = useMainContext();
  return (
    <>
      {cart.map(({ productId: product, quantity }) => {
        return (
          <div
            key={product._id}
            className="card card--horizontal border cart--card">
            <Link to={`/products/${product._id}`}>
              <figure className="card--image">
                <img src={product.image} alt="{item.name}" />
              </figure>
            </Link>

            <div className="card--body cart--card-body">
              <span className="card--title">{product.name}</span>
              <strong className="card--text">
                {" "}
                &#8377;{" "}
                {discountCalc(product.price, product.discount) * quantity}
                <span className="card--subtext">&#8377; {product.price}</span>
                <span className="discount">({product.discount}% off)</span>
              </strong>

              <div className="cart--buttons-container">
                <button
                  className="cart--buttons btn"
                  onClick={() =>
                    setQuantity(product._id, quantity, "dec", dispatch)
                  }>
                  -
                </button>
                <p className="cart-quantity">
                  {incDecLoader === product._id
                    ? "wait.."
                    : `Qty : ${quantity}`}
                </p>
                <button
                  className="cart--buttons btn"
                  onClick={() =>
                    setQuantity(product._id, quantity, "inc", dispatch)
                  }>
                  +
                </button>
              </div>
              <div className="cart--dismiss btn">
                <button
                  className="btn btn-red"
                  onClick={() => removeFromCart(product._id, dispatch)}>
                  {product._id === cartactionLoader ? <DotsLoader /> : "Remove"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
