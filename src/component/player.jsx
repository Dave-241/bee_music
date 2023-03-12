import React, { useState } from "react";

const Player = ({ startplaying, playicon, starttimer, endtimer }) => {
  const [play, setplay] = useState(false);
  const [volumewidth, setvolumewidth] = useState(30);

  //   const pause_play = () => {
  //     setplay(play ? false : true);
  //   };

  const volumeup = () => {
    if (volumewidth > 100) {
      setvolumewidth(100);
    } else {
      setvolumewidth(volumewidth + 10);
    }
  };

  const volumedown = () => {
    if (volumewidth < 0) {
      setvolumewidth(0);
    } else {
      setvolumewidth(volumewidth - 10);
    }
  };

  return (
    <>
      <div className="player_all_wrap">
        <div className="player_wrap">
          <div className="player_section1">
            <div className="player_icon_wrap">
              <div className="player_icon_cover">
                <i className="bi bi-arrows-angle-expand"></i>
              </div>
              <div className="player_icon_cover">
                <i className="bi bi-music-note-beamed"></i>
              </div>
              <div className="player_icon_cover">
                <i className="bi bi-heart"></i>
              </div>
            </div>

            <div className="player_control_wrap">
              <i
                className="bi bi-arrow-repeat"
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="bi bi-skip-backward-fill"
                style={{ cursor: "pointer" }}
              ></i>

              <div
                className="player_pause_play_wrap"
                onClick={startplaying}
                style={{ cursor: "pointer" }}
              >
                <i className={`bi ${playicon}`}></i>
              </div>
              <i
                className="bi bi-skip-forward-fill"
                style={{ cursor: "pointer" }}
              ></i>
              <i className="bi bi-shuffle" style={{ cursor: "pointer" }}></i>
            </div>

            <div className="player_volume_wrap">
              <i
                className="bi bi-volume-down "
                onClick={volumedown}
                style={{ cursor: "pointer" }}
              ></i>
              <div className="volume_indicator_wrap">
                <div
                  className="voume_indicator"
                  style={{ width: volumewidth + "%" }}
                ></div>
                <div className="volume_indicator_deco"></div>
              </div>
              <i
                className="bi bi-volume-up "
                onClick={volumeup}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <div className="player_section2">
            <p className="player_running_time">
              {parseInt(starttimer).toFixed(2)}
            </p>
            <div className="player_progress_wrap">
              <div className="player_progress_play1"></div>
              <div className="player_progress_play2"></div>
            </div>
            <p className="player_ending_time">
              {parseInt(endtimer).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
