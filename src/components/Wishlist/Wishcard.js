import { useMainContext } from "../../context/context";

export const Wishcard = () => {
  const { wishList, dispatch } = useMainContext();

  const removeFromWishList = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  const moveToCart = (item, id) => {
    dispatch({ type: "MOVE_TO_CART", payload: item });
  };

  return (
    <>
      {wishList.map((item) => {
        return (
          <div key={item._id} className="card card--verticle card--m border ">
            <figure className="card--image">
              {item.stock === "outofstock" && (
                <p className="card--overlay--text">Out of Stock</p>
              )}
              <ion-icon
                class="card--dismiss"
                name="close-circle-outline"
                onClick={() => removeFromWishList(item._id)}></ion-icon>
              <img
                className={item.stock === "outofstock" && "card--overlay "}
                src={item.image}
                alt={item.name}
              />
            </figure>
            <div className="card--body">
              <span className="card--title">{item.name}</span>
              <p class="card--text">
                &#8377; {item.price}
                <span className="card--subtext">
                  &#8377; {item.price + 100}
                </span>
              </p>
              <button
                onClick={() => moveToCart(item, item.id)}
                disabled={item.stock === "outofstock" && true}
                className={`btn btn--round btn-primary card--button ${
                  item.stock === "outofstock" && "disabled"
                }`}>
                Move To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
