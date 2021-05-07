export const goToCart = (cart, itemid) => {
  if (cart.some((item) => item._id === itemid)) {
    return true;
  } else {
    return false;
  }
};
