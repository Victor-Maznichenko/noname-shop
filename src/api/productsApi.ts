import { BASE_URL } from "@utils/constants";

export const getProducts = async (limit: number, skip: number) => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    console.log(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProductsBySearch = async (searchTerm: string, limit: number, skip: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProductsByCategory = async (category: string, limit: number, skip: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
