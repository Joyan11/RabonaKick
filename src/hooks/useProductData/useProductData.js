import axios from "axios";
import { useEffect, useState } from "react";
import { useMainContext } from "../../context/context";
function useProuctData() {
  const { products, dispatch } = useMainContext();
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    if (products.length === 0) {
      try {
        setLoading(true);
        const {
          data: { productdata },
          status,
        } = await axios.get("https://EcommerceServer.joyan11.repl.co/products");
        const data = await axios.get(
          "https://EcommerceServer.joyan11.repl.co/products"
        );
        setLoading(false);
        console.log(data);
        console.log(data.status);
        if (status === 200) {
          dispatch({
            type: "SET_INITIAL_DATA",
            payload: productdata,
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
        console.log(error.stack);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loading;
}

export default useProuctData;
