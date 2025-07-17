export const selectCampers = (state) => state.campers.items;
export const selectCamperDetails = (state) => state.campers.itemDetails;

export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.isError;
export const selectError = (state) => state.campers.error;
