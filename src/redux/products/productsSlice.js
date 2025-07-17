import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productsOps";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filter: {
      location: null,
      type: null,
      options: [],
    },
    itemDetails: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    resetItemDetails: (state) => {
      state.itemDetails = null;
    },
    setFilter: (state, action) => {
      const { location, type, options } = action.payload;
      if ("location" in action.payload) state.filter.location = location;
      if ("type" in action.payload) state.filter.type = type;
      if ("options" in action.payload) state.filter.options = options;
    },
    resetFilter: (state) => {
      state.filter = { location: null, type: null, options: [] };
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
export const { resetItemDetails, setFilter, resetFilter } =
  productsSlice.actions;
