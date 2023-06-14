import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { GrPlayFill, AiOutlineInfoCircle } from "../../icons";
import {
  treandingMovies,
  watchmovie,
} from "../../lib/axios/api-functions/movies";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [movie, setMovie] = useState({});
  const [play, setPlay] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    treandingMovies().then(({ data }) =>
      setMovie(data[Math.floor(Math.random() * data.length - 1)])
    );
    setTimeout(() => {
      setPlay(!play);
    }, 4000);
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div>
      {play ? (
        <header
          className="header-container"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          }}
        >
          <div className="banner ml-2">
            <div className="banner-container1">
              <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.originam_name}
              </h1>
            </div>
            <h1 className="banner-description">
              {truncate(movie?.overview, 150)}
            </h1>
            <div className="banner-container2 relative ">
              <button
                className="banner-bt1 "
                onClick={() => {
                  navigator(`/watch/${movie.id}`);
                  watchmovie(movie);
                }}
              >
                Play
              </button>
              <GrPlayFill className="absolute top-[23px] left-[26px] text-[25px]" />
              <button
                className="banner-bt2"
                onClick={() => navigator(`/home/${movie.id}`)}
              >
                More info
              </button>
              <AiOutlineInfoCircle className="absolute top-[23px] left-[160px] text-[25px]" />
            </div>
            <div className="banner-container3"></div>
          </div>
        </header>
      ) : (
        <div className="relative ">
          <YouTube
            containerClassName={"youtube"}
            videoId={`/${movie?.video_id}`}
            opts={{
              width: "1345",
              height: "600",
              padding: 0,
              margin: 0,
              playerVars: { autoplay: 1, controls: 0 },
            }}
          />
          <button
            onClick={() => setPlay(!play)}
            className="bg-white p-2 text-black left-12 top-56 absolute"
          >
            back
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
