import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Count/counterSlice";
import ApiGet from "./ApiGet";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    updateApi : ApiGet
  },
});