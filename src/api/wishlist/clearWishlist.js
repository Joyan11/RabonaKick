import axios from "axios";

export const clearWishlist = async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/wishlist`
    );
    console.log(status);
    if (status === 200) {
      dispatch({ type: "CLEAR_WISHLIST" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
