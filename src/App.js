import Login from "./component/login";
import Nav from "./component/nav";
import "./styles/login.css";
import "./styles/nav.css";
import "./styles/nav2.css";
import "./styles/main1.css";
import "./styles/main2.css";
import "./styles/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav2 from "./component/nav2";
import Main from "./component/main";

function App() {
  return (
    <body>
      {/* <Login /> */}
      <Nav />
      <Main />
      <Nav2 />
    </body>
  );
}

export default App;
