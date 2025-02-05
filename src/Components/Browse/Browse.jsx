import BrowseHeader from "../Header/BrowseHeader";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import TrailerVideo from "./movieTrailer/TrailerVideo";
import TrailerTitle from "./movieTrailer/TrailerTitle";
import { useSelector } from "react-redux";

const Browse = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  useNowPlayingMovies();

  if (!movies) return;

  const movieID = movies[1].id;
  console.log(movieID);

  return (
    <section>
      <div className={`fixed w-full top-0 left-0`}>
        <BrowseHeader />
        <TrailerVideo movieID={movieID} />
        <TrailerTitle />
      </div>
    </section>
  );
};

export default Browse;
