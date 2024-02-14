import { useEffect, useState } from "react";

import { clearProducts, getProducts, setProductsLoading } from "@redux/reducers/productsReducer";
import { useAppDispatch, useAppSelector } from "@redux/store";

const useProducts = () => {
   const { isLoading, limit, total, searchTerm, isError, products } = useAppSelector(
      (state) => state.products
   );
   const { currentCategory } = useAppSelector((state) => state.categories);
   const [currentPage, setCurrentPage] = useState(0);
   const dispatch = useAppDispatch();

   // When changing the category, clear products, set the current page number to 0
   useEffect(() => {
      setCurrentPage(0);
      dispatch(clearProducts());
      dispatch(setProductsLoading(true));
   }, [currentCategory, searchTerm, dispatch]);

   // If isLoading = true loads the items.
   useEffect(() => {
      if (isLoading) {
         const queryParams = {
            category: currentCategory,
            limit,
            searchTerm,
            skip: currentPage * limit
         };

         dispatch(getProducts(queryParams));
      }
   }, [currentCategory, currentPage, dispatch, isLoading, limit, searchTerm]);

   // Loading products on scrolling
   useEffect(() => {
      const scrollHandler = () => {
         const pageHeight = document.documentElement.scrollHeight;
         const { scrollTop } = document.documentElement;
         const windowHeight = window.innerHeight;

         if (
            pageHeight - (scrollTop + windowHeight) < 100 &&
            currentPage * limit <= total &&
            !isError &&
            !isLoading
         ) {
            setCurrentPage(currentPage + 1);
            dispatch(setProductsLoading(true));
         }
      };

      document.addEventListener("scroll", scrollHandler);
      return () => {
         document.removeEventListener("scroll", scrollHandler);
      };
   }, [currentPage, dispatch, isError, isLoading, limit, total]);

   return { isLoading, limit, total, searchTerm, isError, products };
};

export default useProducts;
