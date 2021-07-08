import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { useMainContext } from "../../context/context";

export const useWishlistData = () => {
  const { dispatch } = useMainContext();
  const { token } = useAuth();
  const getData = async () => {
    if (token) {
      try {
        dispatch({ type: "SHOW_LOADER" });
        const {
          status,
          data: {
            wishlistItems: { _id: wishid, products },
          },
        } = await axios.get(`https://rabonaserver.joyan11.repl.co/wishlist`);
        if (status === 200 && products.length !== 0) {
          dispatch({ type: "SAVE_WISH_ID", payload: wishid });
          dispatch({
            type: "ADD_TO_WISHLIST",
            payload: products,
          });
        }
      } catch (error) {
        console.log(error.message);
        console.log(error.stack);
      } finally {
        dispatch({ type: "SHOW_LOADER" });
      }
    }
  };

  useEffect(() => {
    token && getData();
  }, [token]);
};
