import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const removeFromWishlist = async (productid, dispatch, token) => {
  try {
    dispatch({ type: "WISH_ACTION_LOADER", payload: productid });
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/wishlist/${productid}`,
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productid });
      toastMessages("Removed from Wishlist");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    dispatch({ type: "WISH_ACTION_LOADER", payload: null });
  }
};
