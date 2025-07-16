import { createSlice } from "@reduxjs/toolkit";

export const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
});

export default campersSlice.reducer;
