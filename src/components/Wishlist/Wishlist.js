import React from "react";
import "../../css/wishlist.css";
import { useMainContext } from "../../context/context";
import { Wishcard } from "./Wishcard";
import { Wishlistempty } from "./Wishlistempty";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useWishlistData } from "../../hooks/useWishlist/useWishlistData";
import { useCartData } from "../../hooks/useCart/useCartData";

export const Wishlist = () => {
  const { wishList, dispatch } = useMainContext();
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
          onClick={() => dispatch({ type: "CLEAR_WISHLIST" })}>
          Clear Wishlist
        </button>
      </div>
    );
  }
};
