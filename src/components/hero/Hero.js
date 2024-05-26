import React from "react";
import "./Hero.css";

import pic from "../../assets/pic/blob-pic.png";

import Socials from "../social-icons/Socials";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-name">Mark Angelo</span>
            <span className="hero-position">Front-End Developer</span>
            <div className="link-container">
              <a
                href="https://drive.google.com/file/d/1Jyv1stNqkkgA4Iz_ZWwKAgNIModp20Op/view?usp=sharing"
                target="_blank"
                className="btn-resume"
                role="button"
                rel="noreferrer"
              >
                <button>
                  Resume <i className="uil uil-download-alt" />
                </button>
              </a>
            </div>

            {/* SocialIcons */}
            <Socials />
          </div>

          <div className="hero-right">
            <img draggable="false" className="pic" src={pic} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
