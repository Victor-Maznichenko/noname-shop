import { createSlice } from "@reduxjs/toolkit";

interface CartStateType {
  products: Array<ProductCart>;
  totalPrice: number;
  isCartOpen: boolean;
}

const initialState: CartStateType = {
  products: [],
  totalPrice: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, title, price, discountPercentage, thumbnail } = payload;
      const productFound = state.products.find(p => p.id === id);

      if (!productFound) {
        const productCart = {
          quantity: 1,
          total: 30,
          id,
          title,
          price,
          thumbnail,
          discountPercentage,
        };

        state.totalPrice += price;
        state.products = [...state.products, productCart];
        return;
      }

      if (productFound.quantity < productFound.total) {
        state.totalPrice += productFound.price;
        productFound.quantity++;
      }
    },

    incrementQuantityProduct: (state, { payload }) => {
      const productFound = state.products.find(product => product.id === payload);

      if (productFound && productFound.quantity < productFound.total) {
        state.totalPrice += productFound.price;
        productFound.quantity++;
      }
    },

    decrementQuantityProduct: (state, { payload }) => {
      const productFound = state.products.find(product => product.id === payload);

      if (productFound && productFound.quantity > 1 && state.totalPrice > 0) {
        state.totalPrice -= productFound.price;
        productFound.quantity--;
      }
    },

    removeFromCart: (state, { payload }) => {
      const indexProductFound = state.products.findIndex(product => product.id === payload);

      if (indexProductFound !== -1) {
        state.totalPrice -= state.products[indexProductFound].price;
        state.products.splice(indexProductFound, 1);
      }
    },

    setCartOpen: state => {
      state.isCartOpen = true;
    },

    setCartClose: state => {
      state.isCartOpen = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  setCartOpen,
  setCartClose,
  removeFromCart,
  incrementQuantityProduct,
  decrementQuantityProduct,
} = cartSlice.actions;
