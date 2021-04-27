import { useMainContext } from "../../context/context";
import axios from "axios";
export const CartItem = () => {
  const { cart, cartId, dispatch } = useMainContext();

  const setQuantity = async (cartId, productId, quantity, operation) => {
    if (operation === "inc") {
      try {
        const {
          status,
          data: {
            cartItems: { _id: cartid, products },
          },
        } = await axios.post(
          `https://rabonaserver.joyan11.repl.co/cart/${cartId}/${productId}`,
          {
            type: operation,
          }
        );

        if (status === 201) {
          dispatch({ type: "INCREASE_QUANTITY", payload: productId });
        }
      } catch (error) {
        console.log(error.message);
      }
    } else if (operation === "dec" && quantity > 1) {
      try {
        const {
          status,
          data: {
            cartItems: { _id: cartid, products },
          },
        } = await axios.post(
          `https://rabonaserver.joyan11.repl.co/cart/${cartId}/${productId}`,
          {
            type: operation,
          }
        );
        if (status === 201) {
          dispatch({ type: "DECREASE_QUANTITY", payload: productId });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const removeFromCart = async (cartId, productid) => {
    try {
      const {
        status,
        data: {
          cartItems: { _id: cartid, products },
        },
      } = await axios.delete(
        `https://rabonaserver.joyan11.repl.co/cart/${cartId}/${productid}`
      );
      if (status === 200) {
        dispatch({ type: "REMOVE_ITEM", payload: productid });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
                  // onClick={() =>
                  //   dispatch({
                  //     type: "DECREASE_QUANTITY",
                  //     payload: product._id,
                  //   })
                  // }
                  onClick={() =>
                    setQuantity(cartId, product._id, quantity, "dec")
                  }>
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="cart--buttons btn btn-primary"
                  // onClick={() =>
                  //   dispatch({
                  //     type: "INCREASE_QUANTITY",
                  //     payload: product._id,
                  //   })
                  // }
                  onClick={() =>
                    setQuantity(cartId, product._id, quantity, "inc")
                  }>
                  +
                </button>
              </div>
            </div>
            <ion-icon
              class="cart-dismiss"
              name="close-circle-outline"
              onClick={() => removeFromCart(cartId, product._id)}></ion-icon>
          </div>
        );
      })}
    </>
  );
};
