import { removeFromWishlist } from "../../api/wishlist/removeFromWishlist";
import { useMainContext } from "../../context/context";
export const Wishcard = () => {
  const { wishList, wishId, dispatch } = useMainContext();

  const moveToCart = (item, id) => {
    dispatch({ type: "MOVE_TO_CART", payload: item });
  };

  return (
    <>
      {wishList.map(({ productId: product }) => {
        return (
          <div
            key={product._id}
            className="card card--verticle card--m border ">
            <figure className="card--image">
              {product.stock === "outofstock" && (
                <p className="card--overlay--text">Out of Stock</p>
              )}
              <ion-icon
                name="trash-outline"
                class="card--dismiss"
                onClick={() =>
                  removeFromWishlist(wishId, product._id, dispatch)
                }></ion-icon>
              <img
                className={product.stock === "outofstock" && "card--overlay "}
                src={product.image}
                alt={product.name}
              />
            </figure>
            <div className="card--body">
              <span className="card--title">{product.name}</span>
              <p class="card--text">
                &#8377; {product.price}
                <span className="card--subtext">
                  &#8377; {product.price + 100}
                </span>
              </p>
              <button
                onClick={() => moveToCart(product, product.id)}
                disabled={product.stock === "outofstock" && true}
                className={`btn btn--round btn-primary card--button ${
                  product.stock === "outofstock" && "disabled"
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
