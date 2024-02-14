import { BASE_URL } from "@utils/constants";
import { DebounceCallback } from "@utils/types/helpers";

export function debounce<T extends unknown[]>(
   callback: DebounceCallback<T>,
   delay: number
): (...args: T) => void {
   let timer: ReturnType<typeof setTimeout>;

   return (...args: T) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         callback(...args);
      }, delay);
   };
}

export const truncateText = (text: string, limit: number) => {
   if (text.length > limit) {
      return `${text.substring(0, limit)}`;
   }
   return text;
};

export const calculateOldPrice = (price: number, percentage: number) =>
   Math.floor(price / (1 - percentage / 100));

export const buildProductsUrl = ({ category = "all", searchTerm = "", limit = 8, skip = 0 }) => {
   if (searchTerm.length) return `${BASE_URL}/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
   if (category !== "all") return `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
   return `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
};
