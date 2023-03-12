import Login from "./component/login";
import Nav from "./component/nav";
import "./styles/login.css";
import "./styles/nav.css";
import "./styles/nav2.css";
import "./styles/main1.css";
import "./styles/main2.css";
import "./styles/main.css";
import "./styles/player.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav2 from "./component/nav2";
import Main from "./component/main";
import { useEffect, useState } from "react";
import { setClientToken } from "./spotify";

function App() {
  const authEndpoint = "https://accounts.spotify.com/authorize?";
  const clientId = "05cf9fc3e76041a4be0b85c2162d4117";
  const redirectUri = "https://bee-music-three.vercel.app/";
  const scopes = ["user-library-read", "playlist-read-private"];

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <body>
      {token ? (
        <>
          <Nav />
          <Main />
          <Nav2 />
        </>
      ) : (
        <Login
          loginInfo={{
            clientId: clientId,
            redirectUri: redirectUri,
            authEndpoint: authEndpoint,
            scopes: scopes,
          }}
        />
      )}
    </body>
  );
}

export default App;
