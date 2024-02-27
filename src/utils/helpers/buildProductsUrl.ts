import { BASE_URL } from "@utils/constants";

export const buildProductsUrl = ({ category = "all", searchTerm = "", limit = 8, skip = 0 }) => {
  if (searchTerm.length) return `${BASE_URL}/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
  if (category !== "all") return `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  return `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
};
