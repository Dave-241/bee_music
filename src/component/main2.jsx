import React, { useEffect, useState } from "react";

const Main2 = ({
  items,
  no,
  playsong,
  background,
  trasnform,
  playing,
  music_paddin,
  startplaying,
  index,
  set_prop_timer,
}) => {
  //   const [playing, setplaying] = useState("");
  const [time, settime] = useState("");

  //   useEffect(() => {}, [playing]);

  //   const playsong = () => {
  const name = items.track.name.slice(0, 20);
  //     setplaying(name);
  //     if (playing == name) {
  //       console.log("started playing");
  //     }
  //   };

  const runall = () => {
    playsong(name);
    startplaying();
    set_prop_timer(index);
  };

  return (
    <>
      <div
        onClick={() => {
          runall();
        }}
        className="songs_wrap"
        style={{
          cursor: "pointer",
          color: "black",
          backgroundColor: background,
          transform: trasnform,
          padding: music_paddin,
        }}
      >
        <p className="songs_no">{playing}</p>
        <p className="songs_title">
          {items.track.name.slice(0, 20)}
          {items.track.name.length > 20 ? "...." : ""}
        </p>
        <p className="songs_artist">{items.track.artists[0].name}</p>
        <p className="songs_time">
          {(items.track.duration_ms / 60000).toFixed(2)}
        </p>
        <p className="songs_album">
          {items.track.album.name.slice(0, 18)}
          {items.track.album.name.length > 18 ? "...." : ""}
        </p>
      </div>
    </>
  );
};

export default Main2;
