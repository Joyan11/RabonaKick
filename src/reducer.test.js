/** @format */

import { reducer } from "./reducer/reducer";

describe("testing cart and wishlist", () => {
  test("Should add an item to cart", () => {
    const initialState = {
      cart: [],
    };
    const addToCart = {
      type: "ADD_ITEM",
      payload: [
        {
          id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
      ],
    };

    let state = reducer(initialState, addToCart);

    expect(state).toEqual({
      cart: [
        {
          id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
      ],
    });

    const addToCart2 = {
      type: "ADD_ITEM",
      payload: [
        {
          id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
        {
          id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    };

    state = reducer(state, addToCart2);

    expect(state).toEqual({
      cart: [
        {
          id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
        {
          id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    });
  });

  test("Should remove an item from the cart", () => {
    const initialState = {
      cart: [
        {
          _id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    };

    const action = {
      type: "REMOVE_ITEM",
      payload: "1",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      cart: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    });
  });

  test("Should increate the quantity of the product", () => {
    const initialState = {
      cart: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    };

    const action = {
      type: "INCREASE_QUANTITY",
      payload: "2",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      cart: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 2,
        },
      ],
    });
  });

  test("Should decrease the quantity of the product", () => {
    const initialState = {
      cart: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 2,
        },
      ],
    };

    const action = {
      type: "DECREASE_QUANTITY",
      payload: "2",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      cart: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    });
  });

  test("should empty the cart", () => {
    const initialState = {
      cart: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 2,
        },
      ],
    };

    const action = {
      type: "CLEAR_CART",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      cart: [],
    });
  });

  test("should add item to wishlist", () => {
    const initialState = {
      wishList: [],
    };

    const action = {
      type: "ADD_TO_WISHLIST",
      payload: [
        {
          _id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
      ],
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      wishList: [
        {
          _id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
      ],
    });
  });

  test("should remove item to wishlist", () => {
    const initialState = {
      wishList: [
        {
          _id: "1",
          name: "Manchester United",
          price: 799,
          discount: 10,
          quantity: 1,
        },
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    };

    const action = {
      type: "REMOVE_FROM_WISHLIST",
      payload: "1",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      wishList: [
        {
          _id: "2",
          name: "Arsenal",
          price: 629,
          discount: 10,
          quantity: 1,
        },
      ],
    });
  });

  test("should update cart totals", () => {
    const initialState = {
      cart: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
        {
          _id: "2",
          productId: {
            name: "Arsenal",
            price: 699,
            discount: 10,
          },

          quantity: 1,
        },
      ],
      totalCartQuantity: 0,
      totalCartPrice: 0,
      totalDiscount: 0,
    };

    const action = {
      type: "UPDATE_CART_TOTAL",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      cart: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
        {
          _id: "2",
          productId: {
            name: "Arsenal",
            price: 699,
            discount: 10,
          },

          quantity: 1,
        },
      ],
      totalCartQuantity: 2,
      totalCartPrice: 1498,
      totalDiscount: 1348,
    });
  });

  test("should update wishlist total", () => {
    const initialState = {
      wishList: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
        {
          _id: "2",
          productId: {
            name: "Arsenal",
            price: 699,
            discount: 10,
          },

          quantity: 1,
        },
      ],
      totalWishes: 0,
    };

    const action = {
      type: "UPDATE_WISHLIST_TOTAL",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      wishList: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
        {
          _id: "2",
          productId: {
            name: "Arsenal",
            price: 699,
            discount: 10,
          },

          quantity: 1,
        },
      ],
      totalWishes: 2,
    });
  });

  test("should clear wishlist", () => {
    const initialState = {
      wishList: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
        {
          _id: "2",
          productId: {
            name: "Arsenal",
            price: 699,
            discount: 10,
          },

          quantity: 1,
        },
      ],
    };

    const action = {
      type: "CLEAR_WISHLIST",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      wishList: [],
    });
  });

  test("should reset Cart and wishlist", () => {
    const initialState = {
      wishList: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
      ],
      cart: [
        {
          _id: "1",
          productId: {
            name: "Manchester United",
            price: 799,
            discount: 10,
          },
          quantity: 1,
        },
      ],
    };

    const action = {
      type: "RESET",
    };

    let state = reducer(initialState, action);

    expect(state).toEqual({
      wishList: [],
      cart: [],
    });
  });
});
