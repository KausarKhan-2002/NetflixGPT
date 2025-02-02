import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIE_API } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE_API, API_OPTIONS);
    const response = await data.json();
    console.log(response);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
