import { productsAPI } from "@/service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await productsAPI.get("/campers");
      return data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

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
