import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Count/counterSlice";
import inputReducer from "../Count/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input:inputReducer
  },
});