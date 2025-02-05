import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../Utils/Store/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";

const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      API_OPTIONS
    );

    const response = await data.json();
    

    const filterTrailers = response.results.filter(
      (item) => item.type == "Trailer"
    );

    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : response.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useTrailerVideo;
