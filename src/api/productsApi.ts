import { createEffect } from "effector";

import { FetchType } from "@/effector/products";
import { BASE_URL } from "@utils/constants";

interface GetProducts {
  fetchType: FetchType;
  category: string;
  searchTerm: string;
  limit: number;
  page: number;
}

export const getProducts = async (limit: number, skip: number) => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getProductsByCategory = async (category: string, limit: number, skip: number) => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getProductsBySearchTerm = async (searchTerm: string, limit: number, skip: number) => {
  try {
    const response = await fetch(`${BASE_URL}/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getProductsFx = createEffect(
  async ({ fetchType, limit, page, category, searchTerm }: GetProducts) => {
    const skip = page * limit;

    switch (fetchType) {
      case FetchType.ALL:
        return await getProducts(limit, skip);
      case FetchType.CATEGORY:
        return await getProductsByCategory(category, limit, skip);
      case FetchType.SEARCH:
        return await getProductsBySearchTerm(searchTerm, limit, skip);
    }
  }
);
