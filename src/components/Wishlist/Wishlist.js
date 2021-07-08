import React from "react";
import "../../css/wishlist.css";
import { useMainContext } from "../../context/context";
import { Wishcard, Wishlistempty } from "../index";
import { clearWishlist } from "../../api/wishlist/clearWishlist";
import { PuffLoader } from "../Loader";

export const Wishlist = () => {
  const { loader, wishList, dispatch } = useMainContext();

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
          onClick={() => clearWishlist(dispatch)}>
          Clear Wishlist
        </button>
        <div className="wish-container">
          <Wishcard />
        </div>
      </div>
    );
  }
};
