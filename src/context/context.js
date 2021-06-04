import { useReducer, createContext, useContext, useEffect } from "react";
import { reducer } from "../reducer/reducer";
export const mainContext = createContext();

const initialState = {
  products: [],
  cart: [],
  cartId: null,
  wishList: [],
  wishId: null,
  totalCartPrice: 0,
  totalCartQuantity: 0,
  totalWishes: 0,
  totalDiscount: 0,
  priceSort: "lowtohigh",
  stockSort: "totalstock",
  fastDelivery: "allDeliveries",
  priceRange: "2099",
  teamFilter: "allteams",
  displayModal: false,
  modalMessege: "",
  loader: false,
  CartactionLoader: null,
  WishactionLoader: null,
  incLoader: null,
  decLoader: null,
};

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const sortByTeam = (e) => {
    console.log(e.target.value);
    dispatch({ type: "TEAM_FILTER", payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_CART_TOTAL" });
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: "UPDATE_WISHLIST_TOTAL" });
  }, [state.wishList]);

  // useEffect(() => {
  //   setTimeout(() => dispatch({ type: "DISPLAY_MODAL" }), 3000);
  //   return () => {
  //     clearTimeout();
  //   };
  // }, [state.displayModal]);

  // Passed diapatch in functions instead of passing it directly
  return (
    <mainContext.Provider
      value={{
        ...state,
        sortByCost,
        sortByStock,
        sortByDelivery,
        sortBySliderRange,
        sortByTeam,
        dispatch,
      }}>
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(mainContext);
};
