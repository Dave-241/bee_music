import React from "react";

const Main1 = () => {
  return (
    <>
      <div className="main1_all_wrapper">
        <div className="main1_wrap1">
          <div className="main1_arrow_wrap">
            <i className=" bi bi-arrow-left"></i>
            <i className=" bi bi-arrow-right"></i>
          </div>

          <div className="main1_search_wrap">
            {/* icon */}
            <i className=" bi bi-search main1_search"></i>

            <input
              type="text"
              placeholder="Search for the artist,songs and . . ."
              className="main1_input"
            />
          </div>
        </div>
        <div className="main1_wrap2">
          <div className="main1_heading_wrap">
            <p className="what_hot">
              What's hot <i className=" bi bi-fire fire"></i>
            </p>

            <h3 className="trending">Trending</h3>
          </div>
          <p className="main1_ctn_wrap">
            More <i className=" bi bi-arrow-right"></i>
          </p>
        </div>
        <div className="main1_wrap3">
          <div className="main1_hero_deco"></div>

          <div className="hero_text_wrap">
            <p className="hero_subtitle">Artist</p>

            <h2 className="hero_text">On top of the world</h2>

            <div className="hero_ctn_wrap">
              <button className="ctn1">PLAY</button>
              <button className="ctn2">FOLLOW</button>
            </div>
          </div>

          <div className="hero_date_wrap">
            <p className="montly_listener">Monthly Listener</p>

            <p className="views">32.02</p>
          </div>
        </div>
        <div className="main1_wrap4">
          <h3 className="playlist">Rema Mix</h3>

          <p className="show">Show All </p>
        </div>

        <div className="song_title">
          <p className="no">#</p>
          <p className="title">title</p>
          <p className="artist">artist</p>
          <p className="time">time</p>
          <p className="album">album</p>
        </div>
      </div>
    </>
  );
};

export default Main1;
