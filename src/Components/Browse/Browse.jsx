import BrowseHeader from "../Header/BrowseHeader";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()

  return (
    <section>
      <div className={`fixed w-full top-0 left-0`}>
        <BrowseHeader />
      </div>
    </section>
  );
};

export default Browse;
