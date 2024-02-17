import { createSlice } from "@reduxjs/toolkit";
import { ProductCartType } from "@types";

import { isUndefined } from "@helpers";

type CartStateType = {
   products: Array<ProductCartType>;
   totalPrice: number;
   isCartOpen: boolean;
};

const initialState: CartStateType = {
   products: [],
   totalPrice: 0,
   isCartOpen: false
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, { payload }) => {
         const { id, title, price, discountPercentage, thumbnail } = payload;
         const productFound = state.products.find((product) => product.id === id);

         if (productFound) {
            if (productFound.quantity < productFound.total) {
               state.totalPrice += productFound.price;
               productFound.quantity++;
            }
         } else {
            const productCart = {
               quantity: 1,
               total: 30,
               id,
               title,
               price,
               discountPercentage,
               discountedPrice: price * (discountPercentage / 100),
               thumbnail
            };
            state.totalPrice += price;
            state.products = [...state.products, productCart];
         }
      },
      incrementQuantityProduct: (state, { payload }) => {
         const productFound = state.products.find((product) => product.id === payload);
         if (productFound && productFound.quantity < productFound.total) {
            state.totalPrice += productFound.price;
            productFound.quantity++;
         }
      },
      decrementQuantityProduct: (state, { payload }) => {
         const productFound = state.products.find((product) => product.id === payload);
         if (productFound && productFound.quantity > 1 && state.totalPrice > 0) {
            state.totalPrice -= productFound.price;
            productFound.quantity--;
         }
      },
      removeFromCart: (state, { payload }) => {
         const indexProductFound = state.products.findIndex((product) => product.id === payload);
         if (!isUndefined(indexProductFound)) {
            state.totalPrice -= state.products[indexProductFound].price;
            state.products.splice(indexProductFound, 1);
         }
      },
      toggleIsOpenCart: (state) => {
         state.isCartOpen = !state.isCartOpen;
      }
   }
});

export default cartSlice.reducer;
export const {
   addToCart,
   removeFromCart,
   toggleIsOpenCart,
   incrementQuantityProduct,
   decrementQuantityProduct
} = cartSlice.actions;
