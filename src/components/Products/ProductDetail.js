/** @format */

import React, { useState } from "react";
import "../../css/products-details.css";
import { PuffLoader } from "../Loader";
import { ShareProduct } from "./ShareProduct";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMainContext } from "../../context/context";
import { discountCalc } from "../../utils/discount";
import { useProductDetails } from "../../hooks/useProductDetails";
import { goToCart } from "../../utils/goToCart";
import { goToWishlist } from "../../utils/goToWishlist";
import { cartAuthCheck } from "../../utils/cartAuthCheck";
import { useAuth } from "../../context/auth-context";
import { addToWishlist } from "../../api/wishlist/addToWishlist";

export const ProductDetail = () => {
  const [shareModal, setShareModal] = useState(false);
  const { cart, wishList, dispatch, loader } = useMainContext();
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const productDetail = useProductDetails(id);

  const wishAuthProdDetail = (productid) => {
    if (token) {
      addToWishlist(productid, dispatch);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="product-details">
      {loader && <PuffLoader />}
      {productDetail.length !== 0 && (
        <div className="card card--horizontal product-detail-card">
          <div className="share-button" onClick={() => setShareModal(true)}>
            <ion-icon
              style={{ fontSize: "4rem" }}
              name="share-social-outline"></ion-icon>
          </div>

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
                <button
                  className={`btn  btn--icon btn--icon--back btn-primary ${
                    productDetail.stock === "outofstock" && "disabled"
                  }`}
                  disabled={productDetail.stock === "outofstock" && true}
                  onClick={() =>
                    cartAuthCheck(token, navigate, productDetail._id, dispatch)
                  }>
                  <div>Add to Cart</div>
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
                <button className="btn  btn--icon btn--icon--back btn-outline-primary wishbuttonhover">
                  <div
                    onClick={() =>
                      wishAuthProdDetail(productDetail._id, dispatch)
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
      {shareModal && <ShareProduct setShareModal={setShareModal} />}
    </div>
  );
};
