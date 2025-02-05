import React, { memo } from "react";
import useTrailerVideo from "../../../Hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const TrailerVideo = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies.trailer);
  useTrailerVideo(movieID);

  if (!trailer) return;

  return (
    <div className="w-screen border-2 ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default memo(TrailerVideo);
