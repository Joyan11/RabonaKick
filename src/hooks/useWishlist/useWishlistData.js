import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../../context/context";

export const useWishlistData = () => {
  const { wishList, wishId, dispatch } = useMainContext();
  const getData = async () => {
    if (wishList.length === 0 && wishId) {
      try {
        const {
          status,
          data: {
            wishlistItems: { products },
          },
        } = await axios.get(
          `https://rabonaserver.joyan11.repl.co/wishlist/${wishId}`
        );
        if ((status === 200) & (products.length !== 0)) {
          dispatch({
            type: "ADD_TO_WISHLIST",
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
  }, [wishId]);
};
