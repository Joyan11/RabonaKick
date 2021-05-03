import { useMainContext } from "../../context/context";
import { Link } from "react-router-dom";
import { addToCart } from "../../api/cart/addToCart";
import { addToWishlist } from "../../api/wishlist/addToWishlist";
import { removeFromWishlist } from "../../api/wishlist/removefomWishlist";
export const ProductCard = ({ productFilters }) => {
  const {
    products,
    wishList,
    wishId,
    cart,
    cartId,
    dispatch,
  } = useMainContext();

  const wishListButtonHandler = (itemid, wishList) => {
    if (wishList.some((products) => products._id === itemid) === false) {
      addToWishlist(wishId, itemid, dispatch);
    } else {
      removeFromWishlist(wishId, itemid, dispatch);
    }
  };

  const wishToggle = (itemid) => {
    const wishItem = wishList.find((item) => item._id === itemid);
    if (wishItem) {
      if (products.some((item) => item._id === wishItem._id)) {
        return "wishlist-active";
      }
    }
    return "wishlist-inactive";
  };

  const goToCart = (itemid) => {
    const cartItem = cart.find((item) => item._id === itemid);
    if (cartItem) {
      if (products.some((item) => item._id === cartItem._id)) {
        return true;
      }
    }
    return false;
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
                  onClick={() => wishListButtonHandler(item._id, wishList)}>
                  <ion-icon name="heart"></ion-icon>
                </span>
                <span className="card--title">{item.name}</span>
                <p className="card--text">
                  &#8377; {item.price}
                  <span className="card--subtext">
                    &#8377; {item.price + 100}
                  </span>
                </p>

                {goToCart(item._id) === false ? (
                  <button
                    className={`btn btn--round btn-primary card--button ${
                      item.stock === "outofstock" && "disabled"
                    }`}
                    disabled={item.stock === "outofstock" && true}
                    onClick={() => addToCart(cartId, item._id, dispatch)}>
                    Add to Cart
                  </button>
                ) : (
                  <Link
                    to="/cart"
                    className={`btn btn--round btn-primary card--button link go-to-cart `}>
                    Go to Cart
                  </Link>
                )}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
