import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr";
import "../Banner/Banner.css";
import YouTube from "react-youtube";
import { getAllMovies, watchmovie } from "../../lib/axios/api-functions/movies";

const MovieDetails = () => {
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
          height: "670",
          padding: 0,
          margin: 0,
          playerVars: { autoplay: 1, controls: 0 },
        }}
      ></YouTube>
      <button
        onClick={() => navigator("/home")}
        className="absolute top-[10px] right-[50px] p-[10px] bg-red-600 rounded-[50%]"
      >
        X
      </button>
      <div className="banner top-[300px] left-[80px] absolute ml-2">
        <div className="banner-container1">
          <h1 className="banner-title">
            {video?.title || video?.name || video?.original_name}
          </h1>
        </div>
        <div className="banner-container2 relative ">
          <button
            className="banner-bt1 "
            onClick={() => {
              navigator(`/watch/${video.id}`);
              watchmovie(video);
            }}
          >
            Play
          </button>
          <GrPlayFill className="absolute top-[23px] left-[26px] text-[25px]" />
        </div>
        <h1 className="banner-description">{video?.overview}</h1>
        <div className="banner-container3"></div>
      </div>

      <div className="ml-[26px]">
        <h1 className="font-bold text-[25px] mt-[10px] mb-[10px]">
          About {video.original_title}
        </h1>
        <h1>Popularity : {video.popularity}</h1>
        <h1>Release date : {video.release_date}</h1>
        <h1>Vote average : {video.vote_average}</h1>
        <h1>Vote count : {video.vote_count}</h1>
      </div>
    </div>
  );
};

export default MovieDetails;
