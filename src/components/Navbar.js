import { Link } from "react-router-dom";

export const Navbar = ({ totalCartQuantity, totalWishes, cart, wishList }) => {
  return (
    <>
      <nav className="nav nav-primary">
        <div className="nav--logo">
          <Link to="/" className="router-link">
            <p>
              Rabona<ion-icon name="football-outline"></ion-icon>Kick
            </p>
          </Link>
        </div>
        <ul className="list nav--list">
          {/* <Link to="/" className="router-link">
            <li className="nav-item">
              <span className="text text-uppercase center-tabs">Home</span>
            </li>
          </Link> */}
          <Link to="/products" className="router-link">
            <li className="nav-item">
              <span className="text text-uppercase center-tabs">Products</span>
            </li>
          </Link>
        </ul>
        <ul className="list nav--list">
          <Link to="/cart" className="router-link">
            <li className="nav-item">
              <div className="notification">
                <ion-icon
                  name="cart-outline"
                  class="notification-icon"></ion-icon>
                {cart.length > 0 && (
                  <span className="badge badge--round badge--top badge-primary">
                    <p>{totalCartQuantity}</p>
                  </span>
                )}
              </div>
            </li>
          </Link>

          <Link to="/wishlist" className="router-link">
            <li className="nav-item">
              <div className="notification">
                <ion-icon
                  name="heart-outline"
                  class="notification-icon"></ion-icon>
                {wishList.length > 0 && (
                  <span className="badge badge--round badge--top badge-primary">
                    <p>{totalWishes}</p>
                  </span>
                )}
              </div>
            </li>
          </Link>

          <Link to="/user" className="router-link">
            <li className="nav-item">
              <div className="notification">
                <ion-icon
                  name="person-circle-outline"
                  class="notification-icon"></ion-icon>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
