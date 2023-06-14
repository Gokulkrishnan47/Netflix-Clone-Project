import React from "react";
import "./Animation.css";
const Animation = () => {
  return (
    <div>
      <div className="single-con">
        <div className="s1-f text-white">
          <h1 className="single-text">Enjoy on your TV.</h1>
          <p className="single-text2">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="s1-f single-con-parent">
          <img
            className="single-con-img"
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          ></img>
          <video
            className="single-con-vid"
            autoPlay="yes"
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </div>

      <div className="single-con ">
        <div className="s1-f relative">
          <img
            className="single-con-img1"
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          ></img>
          <div className="single-cp-img">
            <img
              className="single-con-img2"
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            ></img>
            <div>
              <h1 className="text-white p-[10px]">Stranger Things</h1>
              <h1 className="text-blue-800 p-[10px]">Downloading...</h1>
            </div>
            <img
              className="w-[70px] h-[70px] p-[10px]"
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            ></img>
          </div>
        </div>
        <div className="s1-f text-white">
          <h1 className="single-text">Download your shows to watch offline.</h1>
          <p className="single-text2">
            {" "}
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="single-con relative">
        <div className="s1-f text-white">
          <h1 className="single-text">Watch everywhere.</h1>
          <p className="single-text2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="s1-f">
          <img
            className="single-con-img single-c-img"
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          ></img>
          <video
            className="single-con-vid single-c-vid"
            autoPlay="yes"
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>

      <div className="single-con">
        <div className="s1-f">
          <img
            className="W-[300PX] h-[400px]"
            alt=""
            src="https://occ-0-5452-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
            data-uia="nmhp-card-animation-asset-image"
          ></img>
        </div>
        <div className="s1-f text-white">
          <h1 className="single-text">Create profiles for children.</h1>
          <p className="single-text2">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Animation;
