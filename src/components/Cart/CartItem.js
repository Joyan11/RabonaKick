import { useMainContext } from "../../context/context";
import { setQuantity } from "../../api/cart/setQuantity";
import { removeFromCart } from "../../api/cart/removeFromCart";
export const CartItem = () => {
  const { cart, cartId, dispatch } = useMainContext();

  return (
    <>
      {cart.map(({ productId: product, quantity }) => {
        return (
          <div
            key={product._id}
            className="card card--horizontal border cart--card">
            <figure className="card--image">
              <img src={product.image} alt="{item.name}" />
            </figure>
            <div className="card--body cart--card-body">
              <span className="card--title">{product.name}</span>
              <p className="card--text"> &#8377;{product.price * quantity}</p>
              <div className="cart--buttons-container">
                <button
                  className="cart--buttons btn btn-primary"
                  onClick={() =>
                    setQuantity(cartId, product._id, quantity, "dec", dispatch)
                  }>
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="cart--buttons btn btn-primary"
                  onClick={() =>
                    setQuantity(cartId, product._id, quantity, "inc", dispatch)
                  }>
                  +
                </button>
              </div>
              <div className="cart--dismiss">
                <button
                  class="btn btn-red"
                  onClick={() => removeFromCart(cartId, product._id, dispatch)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
