import React from "react";
import taylor from "../images/taylor.jpeg";
import drake from "../images/download.jpeg";
import billi from "../images/billijpeg.jpeg";
import kanye from "../images/kanye.jpeg";
import shortcut from "../images/shortcut.jpg";
const Nav2 = () => {
  return (
    <>
      <div className="nav2_main_wrapper">
        <h2 className="shortcut">Shortcuts</h2>
        <div className="nav2_main_wrapper1">
          <div className="nav2_genre_wrap">
            <i className=" bi bi-file-music gen1"></i>
            <p className="genre_text">chill hits</p>
          </div>

          <div className="nav2_genre_wrap">
            <i className=" bi bi-file-music gen1"></i>
            <p className="genre_text">Indie Pop</p>
          </div>
          <div className="nav2_genre_wrap">
            <i className=" bi bi-file-music gen1"></i>
            <p className="genre_text">Piano Blues</p>
          </div>
          <div className="nav2_genre_wrap">
            <i className=" bi bi-file-music gen1"></i>
            <p className="genre_text">Jazz</p>
          </div>
        </div>
        <div className="nav2_main_wrapper2">
          <h3 className="fave_artist">Fav Artist</h3>

          <div className="artist_wrap">
            <div className="art_wrap1">
              <img src={kanye} alt="" className="art_img" />
              <div className="art_text_wrap">
                <p className="art_text1">Kanye West</p>
                <p className="art_text_2">124 songs in libary</p>
              </div>
            </div>
            <i className=" bi bi-three-dots art_ctn"></i>
          </div>
          {/* 
          <div className="artist_wrap">
            <div className="art_wrap1">
              <img src={drake} alt="" className="art_img" />
              <div className="art_text_wrap">
                <p className="art_text1">Drake</p>
                <p className="art_text_2">50 songs in libary</p>
              </div>
            </div>
            <i className=" bi bi-three-dots art_ctn"></i>
          </div> */}

          <div className="artist_wrap">
            <div className="art_wrap1">
              <img src={billi} alt="" className="art_img" />
              <div className="art_text_wrap">
                <p className="art_text1">Billie Eilish</p>
                <p className="art_text_2">15 songs in libary</p>
              </div>
            </div>
            <i className=" bi bi-three-dots art_ctn"></i>
          </div>

          <div className="artist_wrap">
            <div className="art_wrap1">
              <img src={taylor} alt="" className="art_img" />
              <div className="art_text_wrap">
                <p className="art_text1">Taylor Swift</p>
                <p className="art_text_2">196 songs in libary</p>
              </div>
            </div>
            <i className=" bi bi-three-dots art_ctn"></i>
          </div>
        </div>
        <div className="nav2_main_wrapper3">
          <img src={shortcut} alt="" className="shortcut_img" />

          <div className="shortcut_text_wrap">
            <div className="shortcut_except_wrap">
              <p className="shortcut_text1">Torisetsu</p>
              <p className="shortcut_text2">Kana Nishino</p>
            </div>

            <i className=" bi bi-clipboard-plus shortcut_icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav2;
