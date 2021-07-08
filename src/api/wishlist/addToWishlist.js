import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToWishlist = async (itemid, dispatch) => {
  try {
    dispatch({ type: "WISH_ACTION_LOADER", payload: itemid });
    const {
      status,
      data: {
        wishlistItems: { products },
      },
    } = await axios.post(`https://rabonaserver.joyan11.repl.co/wishlist`, {
      products: {
        _id: itemid,
        productId: itemid,
      },
    });

    if (status === 201) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: products });
      toastMessages("Added To Wishlist");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  } finally {
    dispatch({ type: "WISH_ACTION_LOADER", payload: null });
  }
};
