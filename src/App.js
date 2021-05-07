import { Routes, Route } from "react-router-dom";
import { useMainContext } from "./context/context";
import "./App.css";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/Products/ProductDetail";
export default function App() {
  const {
    totalCartQuantity,
    totalWishes,
    displayModal,
    modalContent,
  } = useMainContext();

  return (
    <div className="App">
      <main className="main">
        <Navbar
          totalCartQuantity={totalCartQuantity}
          totalWishes={totalWishes}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishList" element={<Wishlist />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        {displayModal && <Modal modalContent={modalContent} />}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
