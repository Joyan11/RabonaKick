import { useState } from "react";
import { useMainContext } from "./context/context";
import "./App.css";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [route, setRoute] = useState("home");
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

      <div className="main">
        {route === "home" && <Home setRoute={setRoute} />}
        {route === "products" && <Products />}
        {route === "cart" && <Cart />}
        {route === "wishlist" && <Wishlist />}
      </div>

      {displayModal && <Modal modalContent={modalContent} />}
    </div>
  );
}
