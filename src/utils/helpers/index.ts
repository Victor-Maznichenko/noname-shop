import { DebounceCallback } from "@utils/types/helpers";

// eslint-disable-next-line import/prefer-default-export
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
