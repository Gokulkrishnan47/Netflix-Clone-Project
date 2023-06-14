import React, { useEffect, useState } from "react";
import {
  BsPlayCircleFill,
  BsPlusLg,
  BiLike,
  AiOutlineDownCircle,
  HiStar,
  CiCircleRemove,
} from "../../icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { addlist, deletelist } from "../../lib/axios/api-functions/mylist";
import "./DataRow.css";
import {
  getMovies,
  updateMovies,
  watchmovie,
} from "../../lib/axios/api-functions/movies";

const base_url = "https://image.tmdb.org/t/p/original";
const DataRow = ({ title, fetchUrl, searchmovie }) => {
  const [movies, setMovies] = useState([]);
  const navigator = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      getMovies(fetchUrl).then(({ data }) => setMovies(data));
    };
    const fetchRecentWatch = async () => {
      getMovies(fetchUrl).then(({ data }) =>
        setMovies(data.reverse().slice(0, 10))
      );
    };
    if (fetchUrl === "watch") {
      fetchRecentWatch();
    } else {
      fetchData();
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 700 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 700, min: 500 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 500, min: 364 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 364, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <li className="list-none ml-[10px] bg-black text-white p-[5px] ">
        {title}
      </li>
      <div className="overflow-x-auto ba text-[11px]  bg-black h-96 relative">
        <Carousel responsive={responsive}>
          {movies
            ?.filter((user) =>
              user.title?.toLocaleLowerCase()?.includes(searchmovie)
            )
            ?.map((Data) => (
              <div className="flex-1 hov   relative m-[5px] " key={Data.id}>
                <img
                  src={`${base_url}${Data.poster_path}`}
                  alt=""
                  className="h-96 relative"
                />
                <div className="det bg-[#000000a8] text-white absolute top-[205px] w-[100%] pl-[8px] ">
                  <div className="flex pt-[30px]">
                    <div className="flex space-x-3">
                      {pathname.slice(1) === "search" ? (
                        <BsPlayCircleFill
                          className="text-[30px] border p-[5px] rounded-[50%] "
                          onClick={async () => {
                            await updateMovies({
                              ...Data,
                              watchedmovie: new Date(),
                              fetchUrl,
                            });
                            navigator(`/watch/${Data.id}`);
                            getMovies(fetchUrl).then(({ data }) =>
                              setMovies(data.sort())
                            );
                          }}
                        />
                      ) : (
                        <BsPlayCircleFill
                          className="text-[30px] border p-[5px] rounded-[50%]"
                          onClick={() => {
                            navigator(`/watch/${Data.id}`);
                            watchmovie(Data);
                          }}
                        />
                      )}

                      {pathname.slice(1) === "my%20List" ? (
                        <CiCircleRemove
                          className="text-[30px] border p-[5px] rounded-[50%]"
                          onClick={async () => {
                            await deletelist(Data.id);
                            getMovies(fetchUrl).then(({ data }) =>
                              setMovies(data)
                            );
                          }}
                        />
                      ) : (
                        <BsPlusLg
                          className="text-[30px] border p-[5px] rounded-[50%]"
                          onClick={() => addlist(Data)}
                        />
                      )}

                      <BiLike
                        className={`${
                          Data.adult ? "bg-blue-900" : ""
                        } text-[30px] border p-[5px] rounded-[50%]`}
                        onClick={async () => {
                          await updateMovies({
                            ...Data,
                            adult: !Data.adult,
                            fetchUrl,
                          });
                          getMovies(fetchUrl).then(({ data }) =>
                            setMovies(data)
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-1 justify-end mr-[20px]  ">
                      <AiOutlineDownCircle
                        className="text-[35px] p-[5px] border rounded-[50%]"
                        onClick={() => navigator(`/home/${Data.id}`)}
                      />
                    </div>
                  </div>
                  <div>
                    <h1> Release-{Data.release_date}</h1>
                    <h1 className="  mr-[0px]">
                      {Data.adult ? "U/A 18+" : "U/A 7+"}
                    </h1>
                    <div className="flex">
                      <h1>
                        {Data.original_language === "en"
                          ? "English"
                          : "Spanish"}
                      </h1>
                      <h1 className="flex ml-[65px]">
                        Rating
                        <HiStar className="text-orange-500" />
                        {Data.vote_average}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DataRow;
