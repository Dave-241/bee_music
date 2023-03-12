import React, {
  useEffect,
  useCallback,
  useState,
  startTransition,
} from "react";
import SetInterval from "set-interval";
import Main1 from "./main1";
import Main2 from "./main2";
import Player from "./player";
import Apikit from "../spotify";
import Loading from "./loading";

const Main = () => {
  const [loggedin, setloggedin] = useState(false);
  const [playlist, setplaylist] = useState([]);
  const [playing, setplaying] = useState([]);
  const [play, setplay] = useState(true);
  const [playicon, setplayicon] = useState("bi-play-fill");
  const [Updatedtimer, setUpdatedtimer] = useState("");
  const [intervaltime, setintervaltime] = useState(0);

  const [starttimer, setstarttimer] = useState(0.0);
  const [endtimer, setendtimer] = useState(0.0);
  useEffect(() => {
    Apikit.get("playlists/37i9dQZF1EIVYZ5o7aZ0c1")
      .then(function (response) {
        // setPlaylists(response.data.items);
        const Playlist = response.data.tracks.items;
        const filterd_playlist = Playlist.filter((name, key) => key < 9);
        setplaylist(() => filterd_playlist);
        const albums = filterd_playlist[1].track;
        setloggedin(true);
        //   const artist = albums.artists[0].name;
        //   const name = albums.name;
        //   const time = albums.duration_ms;
        //   const time_in_min = time / 60000;

        //   const albumName = albums.album.name;
      })
      .catch(() => {
        setloggedin(false);
      });
  }, []);

  const set_prop_timer = (index) => {
    setUpdatedtimer(index);
    playlist.map((item, key) => {
      if (key == parseInt(Updatedtimer)) {
        const newtimeohhh = (item.track.duration_ms / 60000).toFixed(2);
        setendtimer(newtimeohhh);
      }
    });
  };

  //   useEffect(() => {
  //     setendtimer(lletime);
  //   }, [lletime]);

  //   useEffect(() => {
  //     if (starttimer >= endtimer || !play) {
  //       return;
  //     } else if (play) {
  //       const timeoutFunction = setInterval(playingtimer, 1000);
  //       return () => clearInterval(timeoutFunction);
  //     }

  //     console.log(play);
  //   }, [starttimer]);

  const playingtimer = () => {
    setstarttimer(() => starttimer + intervaltime);
    console.log(starttimer);
  };

  const playsong = (name) => {
    setplaying(name);
    // alert('"player command failed : Premium required"');
  };
  //   useEffect(() => {}, []);

  const [isPlayling, setisplaying] = useState("");
  const startplaying = () => {
    // setstarttimer(() => starttimer + intervaltime);
    setplay(play ? false : true);
    setplay(play ? false : true);
    console.log(play);
    setplayicon(play ? "bi-play-fill" : "bi-pause-fill");
  };

  const nowplaying = () => {
    // setstarttimer(0.0);
    setplay(true);

    setplayicon(!play ? "bi-play-fill" : "bi-pause-fill");
  };

  return (
    <div className="main_all_wrapper">
      <Main1 />
      <div className="song_all_wrap">
        {!loggedin ? (
          <Loading />
        ) : (
          playlist.map((item, index) => {
            //    console.log(item.track.artists[0].name);
            return (
              <Main2
                items={item}
                set_prop_timer={set_prop_timer}
                no={index + 1}
                index={index}
                startplaying={nowplaying}
                key={index}
                playsong={playsong}
                background={
                  playing == item.track.name.slice(0, 20)
                    ? "white"
                    : "transparent"
                }
                trasnform={
                  playing == item.track.name.slice(0, 20)
                    ? "scale(1.05)"
                    : "scale(1)"
                }
                music_paddin={
                  playing == item.track.name.slice(0, 20) ? "0 5px" : ""
                }
                playing={
                  playing !== item.track.name.slice(0, 20) ? (
                    `0${index + 1}`
                  ) : (
                    <i className="bi bi-volume-up "></i>
                  )
                }
              />
            );
          })
        )}
      </div>

      <Player
        startplaying={startplaying}
        playicon={playicon}
        starttimer={starttimer}
        endtimer={endtimer}
      />
    </div>
  );
};

export default Main;
