import React from "react";
import { useMainContext } from "../../context/context";
import { Wishcard } from "./Wishcard";
import { Wishlistempty } from "./Wishlistempty";
import "../../css/wishlist.css";

export const Wishlist = () => {
  const { wishList, dispatch } = useMainContext();

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
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "CLEAR_WISHLIST" })}>
          Clear Wishlist
        </button>
      </div>
    );
  }
};
