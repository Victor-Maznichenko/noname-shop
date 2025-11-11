import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { requests } from "@api";

const getSearchParams = () => new URLSearchParams(window.location.search);

interface CategoriesState {
  categories: Array<string>;
  currentCategory: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: CategoriesState = {
  currentCategory: getSearchParams().get("category") ?? "all",
  categories: [],
  isLoading: true,
  isError: false,
};

export const getCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {
  try {
    return await requests.getCategories();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const changeCurrentCategory = createAsyncThunk<void, string>(
  "categories/updateCategory",
  async (category, { dispatch }) => {
    const searchParams = getSearchParams();

    if (category !== "all") {
      searchParams.set("category", category);
    } else {
      searchParams.delete("category");
    }

    const newURL = new URL(window.location.href);
    newURL.search = searchParams.toString();
    window.history.replaceState({}, "", newURL);
    dispatch(setCurrentCategory(category));
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = ["all", ...payload.map(category => category.slug)];
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

const { setCurrentCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
