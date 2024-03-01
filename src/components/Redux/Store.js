import { configureStore } from "@reduxjs/toolkit";
import { productsRed } from "./ProdcutsSlice";

const store = configureStore({
  reducer: {
    productsRed: productsRed,
  },
});
