import axios from "axios";

export const setQuantity = async (
  cartId,
  productId,
  quantity,
  operation,
  dispatch,
  token
) => {
  if (operation === "inc") {
    try {
      dispatch({ type: "INC_LOADER" });
      const { status } = await axios.post(
        `https://rabonaserver.joyan11.repl.co/cart/${cartId}/${productId}`,
        {
          type: operation,
        },
        { headers: { authorization: token } }
      );

      if (status === 201) {
        dispatch({ type: "INCREASE_QUANTITY", payload: productId });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: "INC_LOADER" });
    }
  } else if (operation === "dec" && quantity > 1) {
    try {
      dispatch({ type: "DEC_LOADER" });
      const { status } = await axios.post(
        `https://rabonaserver.joyan11.repl.co/cart/${cartId}/${productId}`,
        {
          type: operation,
        },
        { headers: { authorization: token } }
      );
      if (status === 201) {
        dispatch({ type: "DECREASE_QUANTITY", payload: productId });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: "DEC_LOADER" });
    }
  }
};
