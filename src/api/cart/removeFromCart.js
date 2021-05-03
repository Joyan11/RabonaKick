import axios from "axios";

export const removeFromCart = async (cartId, productid, dispatch) => {
  try {
    const {
      status,
      data: {
        cartItems: { _id: cartid, products },
      },
    } = await axios.delete(
      `https://rabonaserver.joyan11.repl.co/cart/${cartId}/${productid}`
    );
    if (status === 200) {
      dispatch({ type: "REMOVE_ITEM", payload: productid });
    }
  } catch (error) {
    console.log(error.message);
  }
};
