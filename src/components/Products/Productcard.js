import { useMainContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import { cartAuthCheck } from "../../utils/cartAuthCheck";
import { addToWishlist } from "../../api/wishlist/addToWishlist";
import { removeFromWishlist } from "../../api/wishlist/removefomWishlist";
import { discountCalc } from "../../utils/discount";
import { goToCart } from "../../utils/goToCart";
import { useAuth } from "../../context/auth-context";
import { DotsLoader, OvalLoader } from "../Loaders/Loaders";

export const ProductCard = ({ productFilters }) => {
  const {
    products,
    wishList,
    cart,
    cartactionLoader,
    wishactionLoader,
    dispatch,
  } = useMainContext();
  const { token } = useAuth();
  const navigate = useNavigate();

  const wishListButtonHandler = (itemid, wishList) => {
    if (token) {
      if (wishList.some((products) => products._id === itemid) === false) {
        addToWishlist(itemid, dispatch, token);
      } else {
        removeFromWishlist(itemid, dispatch, token);
      }
    } else {
      navigate("/login");
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

  return (
    <>
      {productFilters.map((item) => {
        return (
          <div
            key={item._id}
            className="card card--verticle card--m border product-card">
            <Link to={`/products/${item._id}`}>
              {" "}
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
            </Link>

            <div className="card--body">
              <span
                className={`wishlist-button wishlist-icon ${wishToggle(
                  item._id
                )}`}
                onClick={() => wishListButtonHandler(item._id, wishList)}>
                {item._id === wishactionLoader ? (
                  <OvalLoader />
                ) : (
                  <ion-icon name="heart"></ion-icon>
                )}
              </span>

              <span className="card--title">{item.name}</span>
              <p className="card--text">
                &#8377; {discountCalc(item.price, item.discount)}
                <span className="card--subtext">&#8377; {item.price}</span>
                <span className="discount">({item.discount}% off)</span>
              </p>

              {goToCart(cart, item._id) === false ? (
                <button
                  className={`btn btn--round btn-primary card--button ${
                    item.stock === "outofstock" && "disabled"
                  }`}
                  disabled={item.stock === "outofstock" && true}
                  onClick={() =>
                    cartAuthCheck(token, navigate, item._id, dispatch)
                  }>
                  {item._id === cartactionLoader ? (
                    <DotsLoader />
                  ) : (
                    " Add to Cart"
                  )}
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
        );
      })}
    </>
  );
};
