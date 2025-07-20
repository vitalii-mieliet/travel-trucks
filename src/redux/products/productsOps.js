import { productsAPI } from "@/service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

      params.set("page", filter.page);
      params.set("limit", filter.limit);

      if (filter.location) params.set("location", filter.location);
      if (filter.type) params.set("form", filter.type);
      if (filter.engine) params.set("engine", filter.engine);
      if (filter.transmissione) params.set("transmission", filter.transmission);

      filter.options.forEach((opt) => {
        params.set(opt, "true");
      });

      const { data } = await productsAPI.get("/campers", { params });
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
