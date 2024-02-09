import { DebounceCallback } from "@utils/types/helpers";

export function debounce<T extends any[]>(
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
