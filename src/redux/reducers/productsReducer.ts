import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { requests } from "@api";

interface ProductsState extends ProductsResponse {
  page: number;
  isLoading: boolean;
  searchTerm: string;
  isError: boolean;
}

const initialState: ProductsState = {
  page: 0,
  total: 0,
  limit: 10,
  products: [],
  searchTerm: "",
  isError: false,
  isLoading: true,
};

interface GetProductsParams {
  limit?: number;
  skip?: number;
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (productParams: GetProductsParams, thunkAPI) => {
    try {
      return await requests.getProducts(productParams);
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
    resetProducts: state => {
      state.page = 0;
      state.total = 0;
      state.products = [];
      state.isError = false;
      state.isLoading = true;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    nextPage: state => {
      state.page += 1;
      state.isLoading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        const newProducts = payload.products.filter((newProduct: Product) =>
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

export const { setProductsLoading, setSearchTerm, nextPage, resetProducts } = productsSlice.actions;
export default productsSlice.reducer;
