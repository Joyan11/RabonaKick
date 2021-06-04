import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToWishlist = async (wishId, itemid, dispatch, token) => {
  try {
    dispatch({ type: "WISH_ACTION_LOADER", payload: itemid });
    const {
      status,
      data: {
        wishlistItems: { _id: wishid, products },
      },
    } = await axios.post(
      wishId === null
        ? `https://rabonaserver.joyan11.repl.co/wishlist`
        : `https://rabonaserver.joyan11.repl.co/wishlist/${wishId}`,
      {
        products: {
          _id: itemid,
          productId: itemid,
        },
      },
      { headers: { authorization: token } }
    );

    if (status === 201) {
      wishId === null && dispatch({ type: "SAVE_WISH_ID", payload: wishid });
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
