import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import cartReducer from "@redux/reducers/cartReducer";
import categoriesReducer from "@redux/reducers/categoriesReducer";
import productsReducer from "@redux/reducers/productsReducer";
import { handleStorageEvent } from "@utils/helpers/handleStorageEvent";

export const persistConfig = {
   key: "root",
   whitelist: ["cart"],
   storage
};

const reducers = combineReducers({
   products: productsReducer,
   categories: categoriesReducer,
   cart: cartReducer
});

export const store = configureStore({
   reducer: persistReducer(persistConfig, reducers),
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
         }
      }),
   devTools: true
});

window.addEventListener("storage", handleStorageEvent, false);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
