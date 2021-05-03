import axios from "axios";

export const clearWishlist = async (wishId, dispatch) => {
  try {
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/wishlist/${wishId}`
    );
    console.log(status);
    if (status === 200) {
      dispatch({ type: "CLEAR_WISHLIST" });
      localStorage.removeItem("wishId");
    }
  } catch (error) {
    console.log(error.message);
  }
};
