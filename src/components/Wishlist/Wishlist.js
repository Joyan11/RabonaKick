import React from "react";
import { useMainContext } from "../../context/context";
import { WishItem } from "./WishItem";
import "../../css/wishlist.css";

export const Wishlist = () => {
  const { clearWishlist } = useMainContext();
  return (
    <div className="wishlist-section">
      <div className="wish-container">
        <WishItem />
      </div>
      <button class="btn btn-secondary" onClick={clearWishlist}>
        Clear Wishlist
      </button>
    </div>
  );
};
