import "../css/home.css";
import { Link } from "react-router-dom";
export const Home = ({ setRoute }) => {
  return (
    <div className="homepage-container">
      <div className="main-title">
        <div className="main-heading">
          <h1 className="man-heading">Welcome To Rabona Kick</h1>
          <p className="main-tagline">
            The Official RabonaKick Online Megastore is your premier source for
            authentic Football jerseys to support your club.
          </p>
          <Link to="/products" className="router-link">
            <button className="btn btn--round btn--icon btn--icon--back btn-secondary">
              <div>Shop Now</div>
              <ion-icon name="cart"></ion-icon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
