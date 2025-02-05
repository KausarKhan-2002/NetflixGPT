import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  // Reducer is an object that takes slices configuration.
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
