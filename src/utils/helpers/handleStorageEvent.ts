import { REHYDRATE } from "redux-persist";

import { persistConfig, store } from "@redux/store";

export const handleStorageEvent = () => {
   const { key } = persistConfig;
   const persistObjJSON = localStorage.getItem(`persist:${key}`) ?? "";
   const persistObj = JSON.parse(persistObjJSON);

   Object.keys(persistObj).forEach((presistKey) => {
      persistObj[presistKey] = JSON.parse(persistObj[presistKey]);
   });

   store.dispatch({
      key,
      payload: persistObj,
      type: REHYDRATE
   });
};
