import { addToCart } from "../api/cart/addToCart";

export const cartAuthCheck = (token, navigate, itemid, dispatch) => {
  if (token) {
    addToCart(itemid, dispatch);
  } else {
    navigate("/login");
  }
};
