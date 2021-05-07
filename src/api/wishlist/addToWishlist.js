import axios from "axios";

export const addToWishlist = async (wishId, itemid, dispatch) => {
  console.log(itemid);
  try {
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
      }
    );

    if (status === 201) {
      wishId === null && dispatch({ type: "SAVE_WISH_ID", payload: wishid });
      wishId === null && localStorage.setItem("wishId", JSON.stringify(wishid));
      dispatch({ type: "ADD_TO_WISHLIST", payload: products });
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
