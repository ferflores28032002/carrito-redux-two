import { configureStore } from "@reduxjs/toolkit";
import CarritoSlices from "./slices/CarritoSlices";

const store = configureStore({
  reducer: {
    card: CarritoSlices,
  },
});

export default store;
