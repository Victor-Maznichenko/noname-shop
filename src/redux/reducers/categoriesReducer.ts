import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "@utils/constants";

interface CategoriesState {
   categories: Array<string>;
   currentCategory: string;
   isLoading: boolean;
   isError: boolean;
}

const initialState: CategoriesState = {
   currentCategory: "all",
   categories: [],
   isLoading: true,
   isError: false
};

export const getCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {
   try {
      const data = await fetch(`${BASE_URL}/products/categories`);
      return await data.json();
   } catch (error) {
      return thunkAPI.rejectWithValue(error);
   }
});

const categoriesSlice = createSlice({
   name: "categories",
   initialState,
   reducers: {
      setCurrentCategory: (state, action) => {
         state.currentCategory = action.payload;
      }
   },
   extraReducers(builder) {
      builder
         .addCase(getCategories.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getCategories.fulfilled, (state, { payload }) => {
            state.categories = ["all", ...payload];
            state.isLoading = false;
         })
         .addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
         });
   }
});

export const { setCurrentCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
