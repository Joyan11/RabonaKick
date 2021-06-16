import React from "react";
import "../../css/wishlist.css";
import { useMainContext } from "../../context/context";
import { Wishcard, Wishlistempty } from "../index";
import { useWishlistData, useCartData } from "../../hooks/index";
import { clearWishlist } from "../../api/wishlist/clearWishlist";
import { useAuth } from "../../context/auth-context";
import { PuffLoader } from "../Loader";

export const Wishlist = () => {
  const { loader, wishList, dispatch } = useMainContext();
  const { token } = useAuth();
  useCartData();
  useWishlistData();

  if (wishList.length === 0) {
    return (
      <div className="wishlist-section empty">
        {loader && <PuffLoader />}
        {loader || <Wishlistempty />}
      </div>
    );
  } else {
    return (
      <div className="wishlist-section">
        <button
          className="btn btn--round btn-secondary"
          onClick={() => clearWishlist(dispatch, token)}>
          Clear Wishlist
        </button>
        <div className="wish-container">
          <Wishcard />
        </div>
      </div>
    );
  }
};
