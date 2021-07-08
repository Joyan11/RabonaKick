import axios from "axios";

export const clearCart = async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_RABONA_SERVER}/cart`
    );
    if (status === 200) {
      dispatch({ type: "CLEAR_CART" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
