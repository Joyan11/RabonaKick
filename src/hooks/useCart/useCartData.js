/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../../context/context";
import { useAuth } from "../../context/auth-context";
export const useCartData = () => {
  const { dispatch } = useMainContext();
  const { token } = useAuth();
  const getData = async () => {
    if (token) {
      try {
        dispatch({ type: "SHOW_LOADER" });
        const {
          status,
          data: {
            cartData: { products },
          },
        } = await axios.get(`https://rabonaserver.joyan11.repl.co/cart`);
        if (status === 200 && products.length !== 0) {
          dispatch({
            type: "ADD_ITEM",
            payload: products,
          });
        }
      } catch (error) {
        console.log(error.response.data.message);
      } finally {
        dispatch({ type: "SHOW_LOADER" });
      }
    }
  };

  useEffect(() => {
    token && getData();
  }, [token]);
};
