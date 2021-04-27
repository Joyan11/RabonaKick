import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../../context/context";

export const useProductData = () => {
  const { products, dispatch } = useMainContext();
  const getData = async () => {
    if (products.length === 0) {
      try {
        dispatch({ type: "SHOW_LOADER" });
        const {
          data: { productdata },
          status,
        } = await axios.get("https://rabonaserver.joyan11.repl.co/products");
        dispatch({ type: "SHOW_LOADER" });
        if (status === 200) {
          dispatch({
            type: "SET_INITIAL_DATA",
            payload: productdata,
          });
        }
      } catch (error) {
        dispatch({ type: "SHOW_LOADER" });
        console.log(error.message);
        console.log(error.stack);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
};
