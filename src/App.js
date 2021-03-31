import { useState } from "react";
import { useCart } from "./context/context";
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
  } = useCart();

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

{
  /* <nav>
        <button onClick={() => setRoute("products")}>Products</button>
        <button onClick={() => setRoute("cart")}>Cart</button>
        <span>{totalCartQuantity}</span>
        <button onClick={() => setRoute("wishlist")}>Wishlist</button>
        <span>{totalWishes}</span>
      </nav> */
}
