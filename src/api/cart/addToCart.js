import axios from "axios";
export const addToCart = async (cartId, itemid, dispatch) => {
  try {
    const {
      status,
      data: {
        cartItems: { _id: cartid, products },
      },
    } = await axios.post(
      cartId === null
        ? `https://rabonaserver.joyan11.repl.co/cart`
        : `https://rabonaserver.joyan11.repl.co/cart/${cartId}`,
      {
        products: {
          _id: itemid,
          productId: itemid,
          quantity: 1,
        },
      }
    );

    if (status === 201) {
      cartId === null && dispatch({ type: "SAVE_CART_ID", payload: cartid });
      cartId === null && localStorage.setItem("cartId", JSON.stringify(cartid));
      dispatch({ type: "ADD_ITEM", payload: products });
    }
    console.log(status, cartid, products);
  } catch (error) {
    console.log(error.message);
  }
};
