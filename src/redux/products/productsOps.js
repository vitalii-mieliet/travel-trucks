import { productsAPI } from "@/service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchAll",
//   async (_, thunkApi) => {
//     try {
//       const { data } = await productsAPI.get("/campers");
//       return data.items;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchProductById = createAsyncThunk(
  "products/fetchDetails",
  async (id, thunkApi) => {
    try {
      const { data } = await productsAPI.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { filter } = getState().products;
      const params = new URLSearchParams();

      if (filter.location) params.set("location", filter.location);
      if (filter.type) params.set("form", filter.type);

      filter.options.forEach((opt) => {
        params.set(opt, "true");
      });

      console.log(params.toString());

      const { data } = await productsAPI.get("/campers", { params });
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
