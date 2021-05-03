import { useMainContext } from "../context/context";
import { useEffect } from "react";

export const useLocalStorage = () => {
  const { dispatch } = useMainContext();

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("cartId"));
    console.log(response);
    dispatch({ type: "SAVE_CART_ID", payload: response });
  }, []);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("wishId"));
    console.log(response);
    dispatch({ type: "SAVE_WISH_ID", payload: response });
  }, []);
};
