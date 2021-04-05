import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useMainContext } from "./context/context";
import "./App.css";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";

export default function App() {
  const {
    totalCartQuantity,
    totalWishes,
    displayModal,
    modalContent,
  } = useMainContext();

  return (
    <div className="App">
      <Navbar
        setRoute={setRoute}
        totalCartQuantity={totalCartQuantity}
        totalWishes={totalWishes}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<Wishlist />} />
      </Routes>

      {displayModal && <Modal modalContent={modalContent} />}
    </div>
  );
}
