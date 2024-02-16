import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const paragraphStyle = {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
    };
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text" style={paragraphStyle}>
              &copy;2024 Luka Londaridze{" "}
            </p>
            <p className="p-text" style={paragraphStyle}>
              All rights reserved
            </p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
