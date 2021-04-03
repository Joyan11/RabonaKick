import React from "react";
import { useMainContext } from "../../context/context";
import { WishItem } from "./WishItem";
import "../../css/wishlist.css";

export const Wishlist = () => {
  const { dispatch } = useMainContext();
  return (
    <div className="wishlist-section">
      <div className="wish-container">
        <WishItem />
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "CLEAR_WISHLIST" })}>
        Clear Wishlist
      </button>
    </div>
  );
};
