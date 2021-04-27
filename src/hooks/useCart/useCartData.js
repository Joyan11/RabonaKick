import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../../context/context";

export const useCartData = () => {
  const { cart, cartId, dispatch } = useMainContext();
  const getData = async () => {
    if (cart.length === 0) {
      try {
        const {
          status,
          data: {
            cartItems: { products },
          },
        } = await axios.get(
          `https://rabonaserver.joyan11.repl.co/cart/${cartId}`
        );
        console.log(products);
        if ((status === 200) & (products.length !== 0)) {
          dispatch({
            type: "ADD_ITEM",
            payload: products,
          });
        }
      } catch (error) {
        console.log(error.message);
        console.log(error.stack);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [cartId]);
};
