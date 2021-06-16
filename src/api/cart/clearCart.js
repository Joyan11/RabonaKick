import axios from "axios";

export const clearCart = async (dispatch, token) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/cart`,
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dispatch({ type: "CLEAR_CART" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
