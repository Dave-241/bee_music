import React, { useEffect } from "react";
import Main1 from "./main1";
import Main2 from "./main2";
import Player from "./player";
import Apikit from "../spotify";

const Main = () => {
  useEffect(() => {
    Apikit.get("me/playlists").then(function (response) {
      // setPlaylists(response.data.items);
      console.log(response);
    });
  }, []);
  return (
    <div className="main_all_wrapper">
      <Main1 />
      <div className="song_all_wrap">
        <Main2 />
        <Main2 />
        <Main2 />
        <Main2 />
        <Main2 />
        <Main2 />
        <Main2 />
      </div>

      <Player />
    </div>
  );
};

export default Main;
