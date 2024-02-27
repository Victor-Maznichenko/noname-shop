import { useEffect } from "react";

import { getCategories } from "@redux/reducers/categoriesReducer";
import { useAppDispatch, useAppSelector } from "@redux/store";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { isLoading, categories } = useAppSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return { isLoading, categories };
};

export default useCategories;
