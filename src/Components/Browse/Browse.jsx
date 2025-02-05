import BrowseHeader from "../Header/BrowseHeader";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import TrailerVideo from "./movieTrailer/TrailerVideo";
import TrailerTitle from "./movieTrailer/TrailerTitle";

const Browse = () => {
  useNowPlayingMovies()
  

  return (
    <section>
      <div className={`fixed w-full top-0 left-0`}>
        <BrowseHeader />
        <TrailerVideo />
        <TrailerTitle />
      </div>
    </section>
  );
};

export default Browse;
