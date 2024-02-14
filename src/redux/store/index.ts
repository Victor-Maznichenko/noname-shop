import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import categoriesReducer from "../reducers/categoriesReducer";
import productsReducer from "../reducers/productsReducer";

export const store = configureStore({
   reducer: {
      products: productsReducer,
      categories: categoriesReducer
   },
   devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
