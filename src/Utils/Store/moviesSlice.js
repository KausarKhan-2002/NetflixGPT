import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      // console.log("state",state); // return state but not showing nowPlayingMovies
      // console.log("action",action); // return action and payload property has nowPlayingMovies
      
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
