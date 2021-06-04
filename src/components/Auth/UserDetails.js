import React from "react";
import { useAuth } from "../../context/auth-context";
import { useMainContext } from "../../context/context";
import "../../css/user.css";
import { useWishlistData } from "../../hooks";
import { useCartData } from "../../hooks/useCart/useCartData";
import { logOut } from "./util/logout";
export const UserDetails = () => {
  const {
    userData: { firstname, lastname, email },
    setToken,
    setUserData,
  } = useAuth();
  useCartData();
  useWishlistData();
  const { dispatch } = useMainContext();

  return (
    <div className="user--container">
      <h2>User Details</h2>
      <p className="user user-fname text text-capitalize">
        First Name: <span>{firstname}</span>
      </p>
      <p className="user user-lname text-capitalize">
        Last Name: <span>{lastname}</span>{" "}
      </p>
      <p className="user user-email">
        Email: <span>{email}</span>{" "}
      </p>

      <button
        className="btn btn--round btn-primary logout"
        onClick={() => logOut(setToken, setUserData, dispatch)}>
        Logout
      </button>
    </div>
  );
};
