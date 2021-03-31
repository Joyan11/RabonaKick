import { useCart } from "../../context/context";

export const ProductItem = ({ productFilters }) => {
  const { addToCart, addToWishlist } = useCart();
  return (
    <>
      {productFilters.map((item) => {
        return (
          <div>
            {/* <div
              key={item.id}
              style={{
                border: "1px solid black",
                width: "50%",
                padding: "1rem",
                margin: "1rem",
              }}>
              <img style={{ width: "200px" }} src={item.image} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
              <button onClick={() => addToWishlist(item)}>
                Add to wishList
              </button>
            </div> */}
            <div key={item.id} className="card card--verticle card--m border">
              <figure className="card--image">
                {item.stock === "outofstock" && (
                  <p class="card--overlay--text">Out of Stock</p>
                )}
                <img
                  src={item.image}
                  class={item.stock === "outofstock" && "card--overlay "}
                  alt=""
                />
              </figure>
              <div className="card--body">
                <span
                  className="wishlist-button"
                  onClick={() => addToWishlist(item)}>
                  <ion-icon
                    class={`wishlist-icon ${
                      item.inWishList === "yes"
                        ? "wishlist-active"
                        : "wishlist-inactive"
                    }`}
                    name="heart"></ion-icon>
                </span>
                <span className="card--title">{item.name}</span>
                <p className="card--text">
                  &#8377; {item.price}
                  <span className="card--subtext">
                    &#8377; {item.price + 100}
                  </span>
                </p>

                <button
                  className="btn btn--round btn-primary card--button"
                  onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                {/* <button onClick={() => addToWishlist(item)}>
                    Add to wishlist
                  </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
