import axios from "axios";

export const clearCart = async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/cart`
    );
    if (status === 200) {
      dispatch({ type: "CLEAR_CART" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
