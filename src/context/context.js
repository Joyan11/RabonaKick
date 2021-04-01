import { useReducer, createContext, useContext, useEffect } from "react";
import { reducer } from "../reducer";
export const mainContext = createContext();

const initialState = {
  cart: [],
  wishList: [],
  totalCartPrice: 0,
  totalCartQuantity: 0,
  totalWishes: 0,
  displayModal: false,
  modalMessege: "",
  priceSort: "lowtohigh",
  stockSort: "totalstock",
  fastDelivery: "allDeliveries",
  priceRange: "2099",
};

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const addToWishlist = (item) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };

  const removeFromWishlist = (id) => [
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id }),
  ];

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  const sortByCost = (e) => {
    if (e.target.value === "lowTohigh") {
      dispatch({ type: "LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "HIGH_TO_LOW", payload: e.target.value });
    }
  };

  const sortByStock = (e) => {
    if (e.target.checked === true) {
      dispatch({ type: "CHECK_STOCK", payload: e.target.checked });
    }
    dispatch({ type: "CHECK_STOCK", payload: e.target.checked });
  };

  const sortByDelivery = (e) => {
    if (e.target.checked === true) {
      dispatch({ type: "CHECK_DELIVERY_STATUS", payload: e.target.checked });
    }
    dispatch({ type: "CHECK_DELIVERY_STATUS", payload: e.target.checked });
  };

  const sortBySliderRange = (e) => {
    dispatch({ type: "PRICE_SLIDER", payload: e.target.value });
  };

  const clearAllFilters = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  const moveToCart = (item) => {
    dispatch({ type: "MOVE_TO_CART", payload: item });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_CART_TOTAL" });
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: "UPDATE_WISHLIST_TOTAL" });
  }, [state.wishList]);

  useEffect(() => {
    setTimeout(() => dispatch({ type: "DISPLAY_MODAL" }), 3000);
  }, [state.displayModal]);

  return (
    <mainContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToWishlist,
        removeFromWishlist,
        clearCart,
        clearWishlist,
        sortByCost,
        sortByStock,
        sortByDelivery,
        sortBySliderRange,
        clearAllFilters,
        moveToCart,
      }}>
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(mainContext);
};
