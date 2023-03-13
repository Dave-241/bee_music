import React, { useEffect, useState } from "react";
import { redirect } from "react-router";
import navlogo from "../images/logo.jpg";
import avater from "../images/avater.jpg";
import apiClient from "../spotify";

const Nav = () => {
  const [top, settop] = useState("-100%");
  const [name, setname] = useState("");

  const showtab = () => {
    settop("0");
  };
  const hidetab = () => {
    settop("-100%");
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    return (window.location.href = "/");
  };

  useEffect(() => {
    apiClient
      .get("me")
      .then((response) => {
        setname(response.data.display_name);

        // setImage(response.data.images[0].url);
        // console.log(response);
      })
      .catch(function (error) {
        window.localStorage.removeItem("token");
        return (window.location.href = "/");
      });
  });

  return (
    <>
      <nav className="desktop_nav_important">
        <div className="nav_deco_wrap">
          {/* <div className="nav_deco">
            <div className="nav_deco1"></div>
            <div className="nav_deco2"></div>
            <div className="nav_deco3"></div>
          </div> */}

          <div
            className="nav_ham"
            style={{
              display: "flex",
              justifyContent: "end",
              width: "10%",
              alignItems: "center",
            }}
          >
            <i className="nav_ham_item bi bi-list"></i>

            <i className="nav_mob_ham bi bi-x-lg"></i>
          </div>
        </div>

        <div className="nav_logo_wrap">
          <img src={navlogo} alt="" className="nav_logo_img" />

          <p className="nav_logo_text">
            <span className="nav_logo_text1">Bee</span>
            <span className="nav_logo_text2">Music</span>
          </p>
        </div>

        <div className="nav_menu_wrap">
          <div className="nav_menu_list_wrap active_link">
            <i className=" bi bi-house-door-fill"></i>
            <p className="nav_menu_text">Home</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className="bi bi-rss"></i>
            <p className="nav_menu_text">Feeds</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-trello"></i>
            <p className="nav_menu_text">Trends</p>
          </div>

          <div className=" nav_menu_subtitle_wrap">
            <p className="nav_menu_text nav_menu_subtitle">Discover</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-newspaper"></i>
            <p className="nav_menu_text">News and Notable</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-calendar"></i>
            <p className="nav_menu_text">Release Calender</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-boxes"></i>
            <p className="nav_menu_text">Events</p>
          </div>

          <div className="nav_menu_user_wrap">
            <div className="nav_user_wrap">
              <div className="nav_user_profile_wrap">
                <img src={avater} alt="" className="nav_user_img" />

                <p className="nav_user_name">{name}</p>
              </div>

              <div className="nav_user_icon_wrap">
                {/* <i className="bi  nav_use_icon bi-caret-right-fill"></i> */}
                <p className="logout" onClick={logout}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile tab */}
      <nav className="mob_nav_important" style={{ top: top }}>
        <div className="nav_deco_wrap">
          {/* <div className="nav_deco">
            <div className="nav_deco1"></div>
            <div className="nav_deco2"></div>
            <div className="nav_deco3"></div>
          </div> */}

          <div
            className="nav_ham"
            style={{
              display: "flex",
              justifyContent: "end",
              width: "10%",
              alignItems: "center",
            }}
          >
            <i className="nav_ham_item bi bi-list"></i>

            <i className="nav_mob_ham bi bi-x-lg" onClick={hidetab}></i>
          </div>
        </div>

        <div className="nav_logo_wrap">
          <img src={navlogo} alt="" className="nav_logo_img" />

          <p className="nav_logo_text">
            <span className="nav_logo_text1">Bee</span>
            <span className="nav_logo_text2">Music</span>
          </p>
        </div>

        <div className="nav_menu_wrap">
          <div className="nav_menu_list_wrap active_link">
            <i className=" bi bi-house-door-fill"></i>
            <p className="nav_menu_text">Home</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className="bi bi-rss"></i>
            <p className="nav_menu_text">Feeds</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-trello"></i>
            <p className="nav_menu_text">Trends</p>
          </div>

          <div className=" nav_menu_subtitle_wrap">
            <p className="nav_menu_text nav_menu_subtitle">Discover</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-newspaper"></i>
            <p className="nav_menu_text">News and Notable</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-calendar"></i>
            <p className="nav_menu_text">Release Calender</p>
          </div>

          <div className="nav_menu_list_wrap">
            <i className=" bi bi-boxes"></i>
            <p className="nav_menu_text">Events</p>
          </div>

          <div className="nav_menu_user_wrap">
            <div className="nav_user_wrap">
              <div className="nav_user_profile_wrap">
                <img src={avater} alt="" className="nav_user_img" />

                <p className="nav_user_name">{name}</p>
              </div>

              <div className="nav_user_icon_wrap">
                {/* <i className="bi  nav_use_icon bi-caret-right-fill"></i> */}
                <p className="logout">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="mob_tab_menu_wrap" onClick={showtab}>
        <div className="mob_deco1"></div>
        <div className="mob_deco2"></div>
        <div className="mob_deco3"></div>
        <p className="mob_deco4">menu</p>
      </div>
    </>
  );
};

export default Nav;
