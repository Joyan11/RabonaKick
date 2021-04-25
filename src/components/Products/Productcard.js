import { useMainContext } from "../../context/context";

export const ProductCard = ({ productFilters }) => {
  const { products, wishList, dispatch } = useMainContext();

  const wishListButtonHandler = (item, wishList) => {
    if (wishList.some((products) => products.id === item.id) === false) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    } else {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
    }
  };

  const wishToggle = (itemid) => {
    const wishid = wishList.find((item) => item._id === itemid);
    if (wishid) {
      if (products.some((item) => item._id === wishid._id)) {
        return "wishlist-active";
      }
    }
    return "wishlist-inactive";
  };

  return (
    <>
      {productFilters.map((item) => {
        return (
          <>
            <div
              key={item._id}
              className="card card--verticle card--m border product-card">
              <figure className="card--image">
                {item.stock === "outofstock" && (
                  <p className="card--overlay--text">Out of Stock</p>
                )}
                <img
                  src={item.image}
                  className={
                    item.stock === "outofstock" ? "card--overlay" : undefined
                  }
                  alt={item.name}
                />
              </figure>
              <div className="card--body">
                <span
                  className={`wishlist-button wishlist-icon ${wishToggle(
                    item._id
                  )}`}
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
