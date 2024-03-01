import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [] };

export const getProducts = createAsyncThunk("products/getProducts", () => {
  axios.get("https://ecommerce.routemisr.com/api/v1/products?limit=10").then((res) => {
    console.log(res.data);
  });
});

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fulfilled", (state, action) => {
      state.products = action.payload;
    });
  },
});
export const productsRed = ProductsSlice.reducer;
