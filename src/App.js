/** @format */

import { Routes, Route, useNavigate } from "react-router-dom";
import { useMainContext } from "./context/context";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Products,
  Cart,
  Wishlist,
  Home,
  Navbar,
  ProductDetail,
  Login,
  Signup,
  PrivateRoute,
  UserDetails,
} from "./components/index";
import { useCartData, useWishlistData } from "./hooks";
import { useEffect } from "react";
import { useAuth } from "./context/auth-context";
import {
  setUniversalRequestToken,
  setupAuthExceptionHandler,
} from "./context/helpers";

export default function App() {
  const { totalCartQuantity, totalWishes, cart, wishList } = useMainContext();
  const { setToken, setUserData, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));
    setUniversalRequestToken(token);
    setupAuthExceptionHandler(logOut, navigate);
    setToken(token);
    setUserData(user);
  }, []);

  useCartData();
  useWishlistData();
  return (
    <div className="App">
      <main className="main">
        <Navbar
          totalCartQuantity={totalCartQuantity}
          totalWishes={totalWishes}
          cart={cart}
          wishList={wishList}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <PrivateRoute path="/cart" element={<Cart />} />
          <PrivateRoute path="/user" element={<UserDetails />} />
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
        </Routes>
        <ToastContainer />
      </main>
    </div>
  );
}
