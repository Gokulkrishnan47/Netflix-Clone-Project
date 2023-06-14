import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { getAllMovies } from "../../lib/axios/api-functions/movies";

const Movie = () => {
  const [video, setVideo] = useState({});
  const navigator = useNavigate();
  const params = useParams();

  useEffect(() => {
    getAllMovies(`${params.id}`).then(({ data }) => setVideo(data));
  }, [params?.id]);
  return (
    <div className=" relative h-[auto]  bg-black text-white">
      <YouTube
        containerClassName={"youtube"}
        videoId={`${video.video_id}`}
        opts={{
          width: "1345",
          height: "652",
          padding: 0,
          margin: 0,
          playerVars: { autoplay: 1 },
        }}
      ></YouTube>
      <button
        onClick={() => navigator("/home")}
        className="absolute top-[10px] right-[50px] p-[10px] bg-red-600 rounded-[50%]"
      >
        X
      </button>
    </div>
  );
};

export default Movie;
