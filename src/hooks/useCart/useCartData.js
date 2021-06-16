import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../../context/context";
import { useAuth } from "../../context/auth-context";
export const useCartData = () => {
  const { cart, dispatch } = useMainContext();
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
        } = await axios.get(`https://rabonaserver.joyan11.repl.co/cart`, {
          headers: { authorization: token },
        });
        if (status === 200 && products.length !== 0) {
          dispatch({
            type: "ADD_ITEM",
            payload: products,
          });
        }
      } catch (error) {
        // console.log(error.message);
        // console.log(error.stack);
        console.log(error.response.data.message);
      } finally {
        dispatch({ type: "SHOW_LOADER" });
      }
    }
  };

  useEffect(() => {
    cart.length === 0 && getData();
  }, [token]);
};
