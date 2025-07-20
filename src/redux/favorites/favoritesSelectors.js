import { createSelector } from "@reduxjs/toolkit";

export const selectFavorites = createSelector(
  (state) => state.favorites?.ids || [],
  (ids) => [...ids]
);
// export const selectFavorites = (state) => state.favorites?.ids || [];
