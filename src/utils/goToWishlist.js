export const goToWishlist = (wishlist, itemid) => {
  if (wishlist.some((item) => item._id === itemid)) {
    return true;
  } else {
    return false;
  }
};
