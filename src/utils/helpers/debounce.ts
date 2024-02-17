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
