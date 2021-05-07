import axios from "axios";
import { useEffect, useState } from "react";
import { useMainContext } from "../context/context";

export const useProductDetails = (productid) => {
  const { dispatch } = useMainContext();
  const [productDetails, setProductDetails] = useState([]);
  const getData = async () => {
    try {
      dispatch({ type: "SHOW_LOADER" });
      const {
        data: { productdata },
        status,
      } = await axios.get(
        `https://rabonaserver.joyan11.repl.co/products/${productid}`
      );
      if (status === 200) {
        setProductDetails(productdata);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    } finally {
      dispatch({ type: "SHOW_LOADER" });
    }
  };

  useEffect(() => {
    productDetails.length === 0 && getData();
  }, []);

  return productDetails;
};
