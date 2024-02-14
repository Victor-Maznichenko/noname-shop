import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { setCurrentCategory } from "@redux/reducers/categoriesReducer";

const useCurrentCategory = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentCategory = searchParams.get("category") ?? "all";
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setCurrentCategory(currentCategory));
   }, [currentCategory, dispatch]);

   const changeCurrentCategory = (category: string) => {
      setSearchParams({ category });
   };

   return { currentCategory, changeCurrentCategory };
};

export default useCurrentCategory;
