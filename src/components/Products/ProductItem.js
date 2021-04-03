import { useMainContext } from "../../context/context";

export const ProductItem = ({ productFilters }) => {
  const { wishList, dispatch } = useMainContext();

  const wishListButtonHandler = (item, wishList) => {
    if (wishList.some((products) => products.id === item.id) === false) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
      dispatch({ type: "TOGGLE_PRODUCT_WISH", payload: item.id });
    } else {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
      dispatch({ type: "TOGGLE_PRODUCT_WISH", payload: item.id });
    }
  };

  return (
    <>
      {productFilters.map((item) => {
        return (
          <>
            <div key={item.id} className="card card--verticle card--m border">
              <figure className="card--image">
                {item.stock === "outofstock" && (
                  <p className="card--overlay--text">Out of Stock</p>
                )}
                <img
                  src={item.image}
                  className={item.stock === "outofstock" && "card--overlay "}
                  alt={item.name}
                />
              </figure>
              <div className="card--body">
                <span
                  className={`wishlist-button wishlist-icon ${
                    item.inWishList === "no"
                      ? "wishlist-inactive"
                      : "wishlist-active"
                  }`}
                  onClick={() => wishListButtonHandler(item, wishList)}>
                  <ion-icon name="heart"></ion-icon>
                </span>
                <span className="card--title">{item.name}</span>
                <p className="card--text">
                  &#8377; {item.price}
                  <span className="card--subtext">
                    &#8377; {item.price + 100}
                  </span>
                </p>

                <button
                  className={`btn btn--round btn-primary card--button ${
                    item.stock === "outofstock" && "disabled"
                  }`}
                  disabled={item.stock === "outofstock" && true}
                  onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
