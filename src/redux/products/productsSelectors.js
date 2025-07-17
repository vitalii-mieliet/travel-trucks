export const selectProducts = (state) => state.products.items;
export const selectProductDetails = (state) => state.products.itemDetails;
export const selectFilter = (state) => state.products.filter;

export const selectIsLoading = (state) => state.products.isLoading;
export const selectIsError = (state) => state.products.isError;
export const selectError = (state) => state.products.error;
