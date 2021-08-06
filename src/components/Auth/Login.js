/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import { useState, useEffect } from "react";
import "../../css/form.css";
import { Link } from "react-router-dom";
import { DotsLoader } from "../Loaders/Loaders";

export const Login = () => {
  const { checkUserPass, errorMessage, setErrorMessage, authLoader } =
    useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enterGuestDetails = () => {
    setEmail("joes1@gmail.com");
    setPassword("Qwerty123$");
  };

  const navigator = (state) => {
    console.log(state);
    if (state === "/user") {
      navigate("/products");
    } else {
      navigate(state);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    await checkUserPass(email, password);
    state?.from ? navigator(state.from) : navigate("/products");
    // navigate(state?.from ? state.from : "/products");
  };

  useEffect(() => {
    setTimeout(() => setErrorMessage(""), 4000);
    return () => clearTimeout();
  }, [errorMessage]);

  return (
    <div>
      <div className="form-container">
        <form id="form" className="form" onSubmit={loginHandler}>
          <h2>Login</h2>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              autoFocus={true}
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input>
            <small>{errorMessage}</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required></input>
            <small>{errorMessage}</small>
          </div>
          <div className="form-button">
            <button type="submit" className="btn btn-primary btn--round ">
              {authLoader ? <DotsLoader /> : "Sign in"}
            </button>
          </div>
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <button onClick={enterGuestDetails} className="guest-details">
              Enter guest Details
            </button>
          </div>

          <p className="form-message">
            Don't have an account?{" "}
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
