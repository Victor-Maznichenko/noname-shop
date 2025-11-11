import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useMemo } from "react";

import { useIntersectionObserver } from "@hooks";
import { getProducts, nextPage, resetProducts, setProductsLoading } from "@redux/reducers/productsReducer";
import { RootState, useAppDispatch, useAppSelector } from "@redux/store";

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const selectProductsState = (state: RootState) => state.products;
  const selectCategoriesState = (state: RootState) => state.categories;

  const { products, isLoading, limit, total, searchTerm, isError, page, currentCategory } = useAppSelector(
    createSelector([selectProductsState, selectCategoriesState], (productsState, categoriesState) => ({
      products: productsState.products,
      isLoading: productsState.isLoading,
      searchTerm: productsState.searchTerm,
      isError: productsState.isError,
      limit: productsState.limit,
      total: productsState.total,
      page: productsState.page,
      currentCategory: categoriesState.currentCategory,
    }))
  );

  const searchTermQuery = useMemo(
    () => (searchTerm && searchTerm.length >= 3 ? searchTerm : undefined),
    [searchTerm]
  );

  const { ref: bottomRef } = useIntersectionObserver<HTMLElement>({
    callback: ({ isIntersecting }) => {
      if (isIntersecting) dispatch(nextPage());
    },
  });

  useEffect(() => {
    dispatch(resetProducts());
  }, [searchTermQuery, currentCategory, dispatch]);

  useEffect(() => {
    if (isLoading && !isError) {
      const queryParams = {
        category: currentCategory,
        searchTerm: searchTermQuery,
        skip: page * limit,
      };

      dispatch(getProducts(queryParams));
    }
  }, [currentCategory, page, dispatch, isError, isLoading, limit, searchTermQuery]);

  const handleLoadMore = () => dispatch(setProductsLoading(true));

  return { products, total, isLoading, isError, limit, bottomRef, handleLoadMore };
};
