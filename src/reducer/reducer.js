export const reducer = (state, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "ADD_ITEM":
      if (
        state.cart.some((items) => items.id === action.payload.id) === false
      ) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: action.payload.quantity + 1,
            },
          ],
          displayModal: true,
          modalContent: "Added to cart",
        };
      } else {
        const newObj = state.cart.map((elements) => {
          if (elements.id === action.payload.id) {
            return {
              ...elements,
              quantity: elements.quantity + 1,
            };
          } else {
            return elements;
          }
        });

        return {
          ...state,
          cart: newObj,
          displayModal: true,
          modalContent: "Added to cart",
        };
      }
    case "REMOVE_ITEM":
      const newArr = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newArr,
        displayModal: true,
        modalContent: "Removed from cart",
      };
    case "INCREASE_QUANTITY":
      const increasedQuantity = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      return {
        ...state,
        cart: increasedQuantity,
      };
    case "DECREASE_QUANTITY":
      const decreasedQuantity = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });

      const nonZeroQuantities = decreasedQuantity.filter(
        (item) => item.quantity !== 0
      );
      return {
        ...state,
        cart: nonZeroQuantities,
      };
    case "ADD_TO_WISHLIST":
      if (
        state.wishList.some((items) => items.id === action.payload.id) === false
      ) {
        return {
          ...state,
          wishList: [...state.wishList, { ...action.payload }],
          displayModal: true,
          modalContent: "Added to Wishlist",
        };
      }
      return {
        ...state,
      };
    case "REMOVE_FROM_WISHLIST":
      const newObj = state.wishList.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        wishList: newObj,
        displayModal: true,
        modalContent: "Removed from Wishlist",
      };
    case "MOVE_TO_CART":
      if (
        state.cart.some((items) => items.id === action.payload.id) === false
      ) {
        const newObj = state.wishList.filter(
          (items) => items.id !== action.payload.id
        );
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: action.payload.quantity + 1,
            },
          ],
          wishList: newObj,
          displayModal: true,
          modalContent: "Added to cart",
        };
      }
      return {
        ...state,
        displayModal: true,
        modalContent: "Already in cart",
      };
    case "UPDATE_CART_TOTAL":
      const totalQuantity = state.cart.reduce((acc, item) => {
        const sum = acc + item.quantity;
        return sum;
      }, 0);
      const totalPrice = state.cart.reduce((acc, item) => {
        const sum = item.quantity * item.price;
        return acc + sum;
      }, 0);
      return {
        ...state,
        totalCartQuantity: totalQuantity,
        totalCartPrice: totalPrice.toFixed(2),
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
        products: state.products.map((items) => {
          return {
            ...items,
            inWishList: "no",
          };
        }),
      };
    case "DISPLAY_MODAL":
      return {
        ...state,
        displayModal: false,
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
    case "CLEAR_FILTER":
      return {
        ...state,
        priceSort: "lowtohigh",
        stockSort: "totalstock",
        fastDelivery: "allDeliveries",
        priceRange: "2099",
        teamFilter: "allteams",
      };

    default:
      return state;
  }
};
