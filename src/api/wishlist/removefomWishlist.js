import axios from "axios";

export const removeFromWishlist = async (wishId, productid, dispatch) => {
  try {
    const {
      status,
      data: {
        wishlistItems: { _id: wishid, products },
      },
    } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/wishlist/${wishId}/${productid}`
    );
    if (status === 200) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productid });
    }
    console.log(wishid, products);
  } catch (error) {
    console.log(error.message);
  }
};
