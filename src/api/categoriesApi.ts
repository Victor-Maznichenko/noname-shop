import { BASE_URL } from "@utils/constants";

export const getCategories = async () => {
  try {
    const resopnse = await fetch(`${BASE_URL}/products/categories`);
    return await resopnse.json();
  } catch (error) {
    return console.error(error);
  }
};
