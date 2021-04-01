import { useMainContext } from "../../context/context";

export const WishItem = () => {
  const { wishList, removeFromWishlist, moveToCart } = useMainContext();
  return (
    <>
      {wishList.map((item) => {
        return (
          // <div
          //   key={item.id}
          //   style={{
          //     border: "1px solid black",
          //     width: "50%",
          //     padding: "1rem",
          //     margin: "1rem",
          //   }}>
          //   <h3>{item.name}</h3>
          //   <p>{item.price}</p>
          //   <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          //   <button onClick={() => moveToCart(item)}>Move to cart</button>
          // </div>
          <div key={item.id} className="card card--verticle card--m border ">
            <figure className="card--image">
              <ion-icon
                class="card--dismiss"
                name="close-circle-outline"
                onClick={() => removeFromWishlist(item.id)}></ion-icon>
              <img src={item.image} alt="" />
            </figure>
            <div className="card--body">
              <span className="card--title">{item.name}</span>
              <p class="card--text">
                &#8377; {item.price}
                <span className="card--subtext">
                  {" "}
                  &#8377; {item.price + 100}
                </span>
              </p>
              <button
                onClick={() => moveToCart(item)}
                className="btn btn--round btn-primary card--button">
                Move To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
