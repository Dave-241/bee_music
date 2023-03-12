import React from "react";
import logo from "../images/logo.jpg";

const Login = ({ loginInfo }) => {
  return (
    <>
      <div className="login_main_wrap">
        <div className="login_main_1_wrap">
          <img src={logo} alt="" className="logo_img" />

          <p className="logo_text_wrap">
            <span className="logo_text_1">Bee</span>
            <span className="logo_text_2">Music</span>
          </p>
        </div>

        <a
          href={`${loginInfo.authEndpoint}client_id=${
            loginInfo.clientId
          }&redirect_uri=${loginInfo.redirectUri}&scope=${loginInfo.scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
          className="login_btn"
        >
          Login
        </a>

        <p className="login_excerpt">
          Login to BeeMusic to listen to your favourite songs
        </p>
      </div>
    </>
  );
};

export default Login;
