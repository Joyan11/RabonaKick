import React from "react";
import "../../css/wishlist.css";
import { useMainContext } from "../../context/context";
import { Wishcard, Wishlistempty } from "../index";
import {
  useLocalStorage,
  useWishlistData,
  useCartData,
} from "../../hooks/index";
import { clearWishlist } from "../../api/wishlist/clearWishlist";

export const Wishlist = () => {
  const { wishList, wishId, dispatch } = useMainContext();
  useLocalStorage();
  useCartData();
  useWishlistData();

  if (wishList.length === 0) {
    return (
      <div className="wishlist-section empty">
        <Wishlistempty />
      </div>
    );
  } else {
    return (
      <div className="wishlist-section">
        <div className="wish-container">
          <Wishcard />
        </div>
        <button
          className="btn btn--round btn-secondary"
          onClick={() => clearWishlist(wishId, dispatch)}>
          Clear Wishlist
        </button>
      </div>
    );
  }
};
