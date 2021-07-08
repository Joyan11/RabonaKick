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
        } = await axios.get(`${process.env.REACT_APP_RABONA_SERVER}/products`);

        if (status === 200) {
          dispatch({
            type: "SET_INITIAL_DATA",
            payload: productdata,
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
    getData();
  }, []);
};
