import React from "react";
import Main1 from "./main1";
import Main2 from "./main2";

const Main = () => {
  return (
    <div className="main_all_wrapper">
      <Main1 />
      <div className="song_all_wrap">
        <Main2 />
      </div>
    </div>
  );
};

export default Main;
