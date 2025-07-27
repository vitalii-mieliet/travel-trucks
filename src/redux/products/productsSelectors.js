import { createSelector } from "@reduxjs/toolkit";
import { productsAdapter } from "./productsSlice";

export const selectProducts = productsAdapter.getSelectors(
  (state) => state.products
);
export const selectProductDetails = (state) => state.products.itemDetails;
export const selectFilter = (state) => state.products.filter;
export const selectTotal = (state) => state.products.total;

export const selectIsLoading = (state) => state.products.isLoading;
export const selectIsError = (state) => state.products.isError;
export const selectError = (state) => state.products.error;

export const selectCanLoadMore = createSelector(
  [selectProducts.selectTotal, selectTotal],
  (loadedItems, totalItems) => loadedItems < totalItems
);
