import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ProductType, ProductsApiResponse, ProductsParamsType } from "@types";

import { buildProductsUrl } from "@helpers";

interface ProductsState extends ProductsApiResponse {
  isLoading: boolean;
  searchTerm: string;
  isError: boolean;
}

const initialState: ProductsState = {
  total: 0,
  limit: 10,
  products: [],
  searchTerm: "",
  isError: false,
  isLoading: true,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (productParams: ProductsParamsType, thunkAPI) => {
    try {
      const response = await fetch(buildProductsUrl(productParams));
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearProducts: state => {
      state.products = [];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        const newProducts = payload.products.filter((newProduct: ProductType) =>
          state.products.length > 0 ? !state.products.some(product => product.id === newProduct.id) : true
        );
        state.products = [...state.products, ...newProducts];
        state.total = payload.total;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setProductsLoading, setSearchTerm, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
