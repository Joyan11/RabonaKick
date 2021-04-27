import { useMainContext } from "../../context/context";
import { useEffect } from "react";

export const useCartLocalStorage = () => {
  const { dispatch } = useMainContext();

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("cartId"));
    console.log(response);
    dispatch({ type: "SAVE_CART_ID", payload: response });
  }, []);
};
