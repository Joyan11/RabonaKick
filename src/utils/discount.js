export const discountCalc = (amount, discount) => {
  return Math.floor(amount - (discount / 100) * amount);
};
