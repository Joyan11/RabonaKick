import axios from "axios";

export const setQuantity = async (
  cartId,
  productId,
  quantity,
  operation,
  dispatch
) => {
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
