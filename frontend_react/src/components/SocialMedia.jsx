import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="app__social">
      <div>
        <FaGithub
          onClick={() => handleIconClick("https://github.com/Luka2552")}
        />
      </div>
      <div>
        <FaLinkedin
          onClick={() =>
            handleIconClick(
              "https://www.linkedin.com/in/luka-londaridze-264597215/",
            )
          }
        />
      </div>
      <div>
        <FaFacebookF
          onClick={() =>
            handleIconClick("https://www.facebook.com/luka.londaridze.1/")
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
