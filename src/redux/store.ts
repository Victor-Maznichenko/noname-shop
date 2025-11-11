import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import { handleStorageEvent } from "@redux/helpers";
import cartReducer from "@redux/reducers/cartReducer";
import categoriesReducer from "@redux/reducers/categoriesReducer";
import productsReducer from "@redux/reducers/productsReducer";

export const persistConfig = {
  key: "root",
  whitelist: ["cart"],
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistReducer<RootState>(persistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

window.addEventListener("storage", handleStorageEvent, false);

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
