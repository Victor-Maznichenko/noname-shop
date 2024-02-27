export const calculateOldPrice = (price: number, percentage: number) =>
  Math.floor(price / (1 - percentage / 100));
