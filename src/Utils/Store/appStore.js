import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  // Reducer is an object that takes slices configuration.
  reducer: {
    user: userReducer,
  },
});

export default appStore;
