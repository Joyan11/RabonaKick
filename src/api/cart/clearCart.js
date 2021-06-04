import axios from "axios";

export const clearCart = async (cartId, dispatch, token) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/cart/${cartId}`,
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dispatch({ type: "CLEAR_CART" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
