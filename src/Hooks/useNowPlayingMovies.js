import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIE_API } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/Store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE_API, API_OPTIONS);
    const response = await data.json();
    // console.log(response.results);
    dispatch(addNowPlayingMovies(response?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
