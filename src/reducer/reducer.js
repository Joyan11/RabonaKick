/** @format */

import { discountCalc } from "../utils/discount";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case "SHOW_LOADER":
      return {
        ...state,
        loader: !state.loader,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cart: action.payload,
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      const increasedQuantity = state.cart.map((item) => {
        return item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      return {
        ...state,
        cart: increasedQuantity,
      };
    case "DECREASE_QUANTITY":
      const decreasedQuantity = state.cart.map((item) => {
        return item._id === action.payload
          ? {
              ...item,
              quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
            }
          : item;
      });
      return {
        ...state,
        cart: decreasedQuantity,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: action.payload,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (items) => items._id !== action.payload
        ),
      };
    case "UPDATE_CART_TOTAL":
      const totalQuantity = state.cart.reduce((acc, item) => {
        const sum = acc + item.quantity;
        return sum;
      }, 0);
      let totalPrice = state.cart.reduce((acc, item) => {
        const sum = item.quantity * item.productId.price;
        return acc + sum;
      }, 0);
      let totalDiscount = state.cart.reduce((acc, item) => {
        const discount =
          item.quantity *
          discountCalc(item.productId.price, item.productId.discount);
        return acc + discount;
      }, 0);
      return {
        ...state,
        totalCartQuantity: totalQuantity,
        totalCartPrice: totalPrice,
        totalDiscount: totalDiscount,
      };
    case "UPDATE_WISHLIST_TOTAL":
      return {
        ...state,
        totalWishes: state.wishList.length,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishList: [],
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        priceSort: action.payload,
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        priceSort: action.payload,
      };
    case "CHECK_STOCK":
      return {
        ...state,
        stockSort: action.payload === true ? "instock" : "totalstock",
      };
    case "CHECK_DELIVERY_STATUS":
      return {
        ...state,
        fastDelivery: action.payload === true ? "available" : "allDeliveries",
      };
    case "PRICE_SLIDER":
      return {
        ...state,
        priceRange: action.payload,
      };
    case "TEAM_FILTER":
      return {
        ...state,
        teamFilter: action.payload,
      };
    case "RESET": {
      return {
        ...state,
        cart: [],
        wishList: [],
      };
    }
    case "CLEAR_FILTER":
      return {
        ...state,
        priceSort: "lowtohigh",
        stockSort: "totalstock",
        fastDelivery: "allDeliveries",
        priceRange: "2099",
        teamFilter: "allteams",
      };
    case "CART_ACTION_LOADER":
      return {
        ...state,
        cartactionLoader: action.payload,
      };

    case "WISH_ACTION_LOADER":
      return {
        ...state,
        wishactionLoader: action.payload,
      };
    case "INC_LOADER":
      return {
        ...state,
        incLoader: action.payload,
      };
    case "DEC_LOADER":
      return {
        ...state,
        decLoader: action.payload,
      };
    default:
      return state;
  }
};
