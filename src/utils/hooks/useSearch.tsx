import { ChangeEvent, useMemo, useState } from "react";

import { debounce } from "@helpers";
import { setSearchTerm } from "@redux/reducers/productsReducer";
import { useAppDispatch } from "@redux/store";

import useCurrentCategory from "./useCurrentCategory";

type HandleSearchType = (searchTerm: string) => void;

const useSearch = (onClear?: () => void) => {
  const [value, setValue] = useState("");
  const { changeCurrentCategory } = useCurrentCategory();
  const dispatch = useAppDispatch();

  const handleSearch = useMemo<HandleSearchType>(
    () =>
      debounce(searchTerm => {
        dispatch(setSearchTerm(searchTerm));
      }, 300),
    [dispatch]
  );

  const handleValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (value.length < 3) changeCurrentCategory("all");
    else handleSearch(value);

    dispatch(setSearchTerm(""));
    setValue(target.value);
  };

  const clearValue = () => {
    if (onClear) onClear();
    dispatch(setSearchTerm(""));
    setValue("");
  };

  return { value, handleValue, clearValue };
};

export default useSearch;
