import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productsOps";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    itemDetails: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    resetItemDetails: (state) => {
      state.itemDetails = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }),
});

export default productsSlice.reducer;
export const { resetItemDetails } = productsSlice.actions;
