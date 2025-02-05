import React, { memo } from "react";
import { useSelector } from "react-redux";

const TrailerTitle = () => {
  const movies = useSelector((store) => store.movies);
  console.log("TrailerTitle");

  if (!movies.nowPlayingMovies) return;

  console.log(movies.nowPlayingMovies);

  const { title, overview } = movies.nowPlayingMovies[0];

  return (
    <div className="absolute top-0 pl-10 w-[45%] h-screen text-white bg-gradient-to-r from-slate-900 to-transparent">
      <div className="h-screen flex flex-col justify-end pb-20">
        <div id="title">
          <h2 className="text-5xl font-bold">{title}</h2>
          <p className="text-lg mt-2">{overview}</p>
        </div>

        <div id="buttons" className="mt-4 flex gap-7">
          <button className="px-8 py-2 text-lg font-medium bg-slate-100 text-black hover:opacity-70">
            Play
          </button>
          <button className="px-8 py-2 text-lg font-medium bg-gray-100 text-black opacity-40 hover:opacity-30">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(TrailerTitle);
