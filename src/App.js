import { Routes, Route } from "react-router-dom";
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
import { useCartData, useProductData, useWishlistData } from "./hooks";

export default function App() {
  const { totalCartQuantity, totalWishes, cart, wishList } = useMainContext();
  useProductData();
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
