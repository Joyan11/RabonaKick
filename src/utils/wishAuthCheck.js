import { addToWishlist } from "../api/wishlist/addToWishlist";

export const wishAuthCheck = (
  token,
  navigate,
  wishListButtonHandler,
  itemid,
  wishlist
) => {
  if (token) {
    wishListButtonHandler(itemid, wishlist);
  } else {
    navigate("/login");
  }
};

export const wishAuthProdDetail = (
  wishid,
  productid,
  dispatch,
  token,
  navigate
) => {
  if (token) {
    console.log("running");
    addToWishlist(wishid, productid, dispatch, token);
  } else {
    navigate("/login");
  }
};
