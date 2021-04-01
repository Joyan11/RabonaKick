import "../css/home.css";

export const Home = ({ setRoute }) => {
  return (
    <div className="homepage-container">
      <div className="main-title">
        <div className="main-heading">
          <h1 man-heading>Welcome To Rabona Kick</h1>
          <p main-tagline>
            The Official RabonaKick Online Megastore is your premier source for
            authentic Football jerseys to support your club.
          </p>
          <button
            className="btn btn--round btn--icon btn--icon--back btn-secondary"
            onClick={() => setRoute("products")}>
            <div>Shop Now</div>
            <ion-icon name="cart"></ion-icon>
          </button>
        </div>
      </div>
      <figure className="main-figure">
        <img
          class="main-image"
          src="https://a.espncdn.com/photo/2020/0730/r725410_1296x864_3-2.jpg"
          alt="football"
        />
      </figure>
    </div>
  );
};
