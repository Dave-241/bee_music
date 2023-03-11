import React, { useState } from "react";

const Player = () => {
  const [play, setplay] = useState(true);
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
              <i className="bi bi-arrow-repeat"></i>
              <i className="bi bi-skip-backward-fill"></i>

              <div className="player_pause_play_wrap">
                <i
                  className={`bi ${!play ? "bi-play-fill" : "bi-pause-fill"}`}
                ></i>
              </div>
              <i className="bi bi-skip-forward-fill"></i>
              <i className="bi bi-shuffle"></i>
            </div>

            <div className="player_volume_wrap">
              <i className="bi bi-volume-down "></i>
              <div className="volume_indicator_wrap">
                <div className="voume_indicator"></div>
                <div className="volume_indicator_deco"></div>
              </div>
              <i className="bi bi-volume-up "></i>
            </div>
          </div>
          <div className="player_section2">
            <p className="player_running_time">0.14</p>
            <div className="player_progress_wrap">
              <div className="player_progress_play1"></div>
              <div className="player_progress_play2"></div>
            </div>
            <p className="player_ending_time">2.59</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
