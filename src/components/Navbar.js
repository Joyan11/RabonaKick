export const Navbar = ({ setRoute, totalCartQuantity, totalWishes }) => {
  return (
    <>
      <nav className="nav nav-primary">
        <div className="nav--logo">
          <p>
            Rabona<ion-icon name="football-outline"></ion-icon>Kick
          </p>
        </div>
        <ul className="list nav--list">
          <li className="nav-item" onClick={() => setRoute("home")}>
            <a className="link center-tabs">Home</a>
          </li>
          <li className="nav-item" onClick={() => setRoute("products")}>
            <a className="link center-tabs">Products</a>
          </li>
        </ul>
        <ul className="list nav--list">
          <li className="nav-item" onClick={() => setRoute("cart")}>
            <div className="notification">
              <ion-icon
                name="cart-outline"
                class="notification-icon"></ion-icon>
              <span className="badge badge--round badge--top badge-primary">
                <p>{totalCartQuantity}</p>
              </span>
            </div>
          </li>
          <li className="nav-item" onClick={() => setRoute("wishlist")}>
            <div className="notification">
              <ion-icon
                name="heart-outline"
                class="notification-icon"></ion-icon>
              <span className="badge badge--round badge--top badge-primary">
                <p>{totalWishes}</p>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
