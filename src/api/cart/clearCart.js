import axios from "axios";

export const clearCart = async (cartId, dispatch) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/cart/${cartId}`
    );
    if (status === 200) {
      dispatch({ type: "CLEAR_CART" });
      localStorage.removeItem("cartId");
    }
  } catch (error) {
    console.log(error.message);
  }
};
