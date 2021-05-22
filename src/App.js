import { Routes, Route } from "react-router-dom";
import { useMainContext } from "./context/context";
import "./App.css";
import {
  Products,
  Cart,
  Wishlist,
  Home,
  Navbar,
  ProductDetail,
  Modal,
} from "./components/index";

export default function App() {
  const { totalCartQuantity, totalWishes, displayModal, modalContent } =
    useMainContext();

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
