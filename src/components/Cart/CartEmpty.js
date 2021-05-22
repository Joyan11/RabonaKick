import React from "react";
import { Link } from "react-router-dom";
export function CartEmpty() {
  return (
    <div className="empty-container">
      <p className="text text-xl text--center empty-text">Your Cart Is Empty</p>
      <Link to="/products" className="router-link">
        <button className="btn btn--round btn-secondary">Shop Now</button>
      </Link>
    </div>
  );
}
