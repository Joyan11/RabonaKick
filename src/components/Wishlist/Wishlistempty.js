import React from "react";
import { Link } from "react-router-dom";
export function Wishlistempty() {
  return (
    <div className="empty-container">
      <p className="text text-xl text--center empty-text">
        It's Free To Make a Wish
      </p>
      <Link to="/products" className="router-link">
        <button className="btn btn--round btn-secondary">
          Continue Browsing
        </button>
      </Link>
    </div>
  );
}
