import { Link } from "react-router-dom";

export const Navbar = ({ totalCartQuantity, totalWishes }) => {
  return (
    <>
      <nav className="nav nav-primary">
        <div className="nav--logo">
          <p>
            Rabona<ion-icon name="football-outline"></ion-icon>Kick
          </p>
        </div>
        <ul className="list nav--list">
          <Link to="/" className="router-link">
            <li className="nav-item">
              <a className="link center-tabs">Home</a>
            </li>
          </Link>
          <Link to="/products" className="router-link">
            <li className="nav-item">
              <a className="link center-tabs">Products</a>
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
                <span className="badge badge--round badge--top badge-primary">
                  <p>{totalCartQuantity}</p>
                </span>
              </div>
            </li>
          </Link>

          <Link to="/wishlist" className="router-link">
            <li className="nav-item">
              <div className="notification">
                <ion-icon
                  name="heart-outline"
                  class="notification-icon"></ion-icon>
                <span className="badge badge--round badge--top badge-primary">
                  <p>{totalWishes}</p>
                </span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
