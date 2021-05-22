import React from "react";
import "../../css/products-details.css";
import { PuffLoader } from "../Loader";
import { useParams, Link } from "react-router-dom";
import { useMainContext } from "../../context/context";
import { discountCalc } from "../../utils/discount";
import { useProductDetails } from "../../hooks/useProductDetails";
import { addToCart } from "../../api/cart/addToCart";
import { addToWishlist } from "../../api/wishlist/addToWishlist";
import { goToCart } from "../../utils/goToCart";
import { goToWishlist } from "../../utils/goToWishlist";

export const ProductDetail = () => {
  const { cart, wishList, cartId, wishId, dispatch, loader } = useMainContext();
  const { id } = useParams();
  const productDetail = useProductDetails(id);
  console.log(productDetail);
  return (
    <div className="product-details">
      {loader && <PuffLoader />}
      {productDetail.length !== 0 && (
        <div className="card card--horizontal product-detail-card">
          <figure className="card--image">
            {" "}
            <img src={productDetail.image} alt="" />{" "}
          </figure>
          <div className="card--body">
            {" "}
            <h1 className="card--title text-uppercase">{productDetail.name}</h1>
            <p className="product-tag text text-s text-capitalize">
              Buy {productDetail.name} <strong>{productDetail.type}</strong>{" "}
              Jersey Online in India
            </p>
            <div className="product-details-container">
              <p className="card--text ">
                Brand:{" "}
                <strong className="product-des text-uppercase">
                  {productDetail.brand}
                </strong>
              </p>
              <p className="card--text ">
                Delivery Option:{" "}
                <strong className="product-des text-uppercase">
                  {productDetail.delivery}
                </strong>
              </p>
            </div>
            <div className="product-price ">
              <strong className="card--text">
                &#8377;{" "}
                {discountCalc(productDetail.price, productDetail.discount)}
              </strong>
              <span className="card--subtext">
                &#8377; {productDetail.price}
              </span>
              <span className="discount">({productDetail.discount}% off)</span>
              <p>inclusive of all taxes</p>
            </div>
            <div className="product-detail-button">
              {goToCart(cart, productDetail._id) ? (
                <Link
                  to="/cart"
                  className="btn  btn--icon btn--icon--back btn-primary link">
                  <div>Go To Cart</div>
                  <ion-icon name="cart"></ion-icon>
                </Link>
              ) : (
                <button className="btn  btn--icon btn--icon--back btn-primary">
                  <div
                    onClick={() =>
                      addToCart(cartId, productDetail._id, dispatch)
                    }>
                    Add to Cart
                  </div>
                  <ion-icon name="cart"></ion-icon>
                </button>
              )}
              {goToWishlist(wishList, productDetail._id) ? (
                <Link
                  to="/wishlist"
                  className="btn  btn--icon btn--icon--back btn-outline-primary link">
                  <div>Go To Wishlist</div>
                  <ion-icon name="heart-outline"></ion-icon>
                </Link>
              ) : (
                <button className="btn  btn--icon btn--icon--back btn-outline-primary">
                  <div
                    onClick={() =>
                      addToWishlist(wishId, productDetail._id, dispatch)
                    }>
                    Wishlist
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
