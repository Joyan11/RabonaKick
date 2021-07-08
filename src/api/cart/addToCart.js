import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
export const addToCart = async (itemid, dispatch) => {
  try {
    dispatch({ type: "CART_ACTION_LOADER", payload: itemid });
    const {
      status,
      data: {
        cartItems: { products },
      },
    } = await axios.post(`${process.env.REACT_APP_RABONA_SERVER}/cart`, {
      products: {
        _id: itemid,
        productId: itemid,
        quantity: 1,
      },
    });

    if (status === 201) {
      dispatch({ type: "ADD_ITEM", payload: products });
      toastMessages("Added To Cart");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    dispatch({ type: "CART_ACTION_LOADER", payload: null });
  }
};
