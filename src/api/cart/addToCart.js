import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
export const addToCart = async (cartId, itemid, dispatch, token) => {
  try {
    dispatch({ type: "CART_ACTION_LOADER", payload: itemid });
    const {
      status,
      data: {
        cartItems: { _id: cartid, products },
      },
    } = await axios.post(
      cartId === null
        ? `https://rabonaserver.joyan11.repl.co/cart`
        : `https://rabonaserver.joyan11.repl.co/cart/${cartId}`,
      {
        products: {
          _id: itemid,
          productId: itemid,
          quantity: 1,
        },
      },
      { headers: { authorization: token } }
    );

    if (status === 201) {
      cartId === null && dispatch({ type: "SAVE_CART_ID", payload: cartid });
      dispatch({ type: "ADD_ITEM", payload: products });
      toastMessages("Added To Cart");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    dispatch({ type: "CART_ACTION_LOADER", payload: null });
  }
};
