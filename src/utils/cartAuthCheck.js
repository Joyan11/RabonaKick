import { addToCart } from "../api/cart/addToCart";

export const cartAuthCheck = (token, navigate, cartId, itemid, dispatch) => {
  if (token) {
    addToCart(cartId, itemid, dispatch, token);
  } else {
    navigate("/login");
  }
};
