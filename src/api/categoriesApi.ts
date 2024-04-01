import { BASE_URL } from "@utils/constants";

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
