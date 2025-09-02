import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productsOps";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

const initialFilter = {
  location: "",
  type: null,
  options: [],
  transmission: null,
  engine: null,
  page: 1,
  limit: 4,
};

const initialState = productsAdapter.getInitialState({
  filter: initialFilter,
  itemDetails: null,
  total: 0,
  isLoading: false,
  isError: false,
  error: null,
});

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    resetItemDetails: (state) => {
      state.itemDetails = null;
    },
    setFilter: (state, action) => {
      const { location, type, options, engine, transmission, page, limit } =
        action.payload;
      if ("location" in action.payload) state.filter.location = location;
      if ("type" in action.payload) state.filter.type = type;
      if ("options" in action.payload) state.filter.options = options;
      if ("transmission" in action.payload)
        state.filter.transmission = transmission;
      if ("engine" in action.payload) state.filter.engine = engine;
      if ("page" in action.payload) state.filter.page = page;
      if ("limit" in action.payload) state.filter.limit = limit;
    },
    resetFilter: (state) => {
      state.filter = initialFilter;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.isLoading = false;
        state.total = total;
        if (state.filter.page === 1) {
          productsAdapter.setAll(state, items);
        } else {
          productsAdapter.upsertMany(state, items);
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
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
export { productsAdapter };
