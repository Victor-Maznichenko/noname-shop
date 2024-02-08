// import { debounce } from "@helpers";
import { ChangeEvent, useState } from "react";

const useSearchQuery = (onClear?: () => void) => {
   const [value, setValue] = useState("");

   // const handleSearch = useMemo(
   //    () =>
   //       debounce((searchTerm) => {
   //          console.log(searchTerm);
   //       }, 300),
   //    []
   // );

   const handleValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
      // handleSearch(target.value);
      setValue(target.value);
   };

   const clearValue = () => {
      if (onClear) onClear();
      setValue("");
   };

   return { value, handleValue, clearValue };
};

export default useSearchQuery;
