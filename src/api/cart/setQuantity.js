import axios from "axios";

export const setQuantity = async (productId, quantity, operation, dispatch) => {
  if (operation === "inc") {
    try {
      dispatch({ type: "INC_LOADER", payload: productId });
      const { status } = await axios.post(
        `${process.env.REACT_APP_RABONA_SERVER}/cart/${productId}`,
        {
          type: operation,
        }
      );

      if (status === 201) {
        dispatch({ type: "INCREASE_QUANTITY", payload: productId });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: "INC_LOADER", payload: null });
    }
  } else if (operation === "dec" && quantity > 1) {
    try {
      dispatch({ type: "DEC_LOADER", payload: productId });
      const { status } = await axios.post(
        `${process.env.REACT_APP_RABONA_SERVER}/cart/${productId}`,
        {
          type: operation,
        }
      );
      if (status === 201) {
        dispatch({ type: "DECREASE_QUANTITY", payload: productId });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: "DEC_LOADER", payload: null });
    }
  }
};
