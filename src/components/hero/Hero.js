import React from "react";
import "./Hero.css";

import pic from "../../assets/pic/2x2.JPG";

import Socials from "../social-icons/Socials";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-name">Mark Angelo</span>
            <span className="hero-position">Front-End Developer</span>
            <a
              href="https://drive.google.com/file/d/1Jyv1stNqkkgA4Iz_ZWwKAgNIModp20Op/view?usp=sharing"
              target="_blank"
              className="btn-resume"
              role="button"
              rel="noopener"
            >
              <button>
                Resume <i className="uil uil-download-alt"></i>
              </button>
            </a>

            {/* SocialIcons */}
            <Socials />
          </div>

          <div className="hero-right">
            <img className="pic" src={pic} alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
