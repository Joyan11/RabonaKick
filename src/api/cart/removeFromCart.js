import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const removeFromCart = async (productid, dispatch, token) => {
  try {
    dispatch({ type: "CART_ACTION_LOADER", payload: productid });
    const { status } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/cart/${productid}`,
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dispatch({ type: "REMOVE_ITEM", payload: productid });
      toastMessages("Removed From Cart");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    dispatch({ type: "CART_ACTION_LOADER", payload: null });
  }
};
