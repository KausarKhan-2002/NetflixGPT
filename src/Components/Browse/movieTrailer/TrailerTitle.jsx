import React from "react";
import { useSelector } from "react-redux";

const TrailerTitle = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return;

  console.log(movies.nowPlayingMovies);

  const { title, overview } = movies.nowPlayingMovies[0];

  return (
    <div className="mt-20 absolute top-[300px] left-10 w-1/2">
      <div id="title">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-lg mt-2">{overview}</p>
      </div>

      <div id="buttons" className="mt-4 flex gap-7">
        <button className="px-8 py-2 text-lg font-medium bg-slate-100">Play</button>
        <button className="px-8 py-2 text-lg font-medium bg-slate-300">Show more</button>
      </div>
    </div>
  );
};

export default TrailerTitle;
