import axios from "axios";

export const clearWishlist = async (dispatch, token) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/wishlist`,
      { headers: { authorization: token } }
    );
    console.log(status);
    if (status === 200) {
      dispatch({ type: "CLEAR_WISHLIST" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
