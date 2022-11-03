import React from "react";
import "./Hero.css";

import pic from "../../assets/pic/blob-pic.png";

import Socials from "../social-icons/Socials";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div
            className="hero-left"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <span className="hero-name">Mark Angelo</span>
            <span className="hero-position">Front-End Developer</span>
            <a
              href="https://drive.google.com/file/d/1Jyv1stNqkkgA4Iz_ZWwKAgNIModp20Op/view?usp=sharing"
              target="_blank"
              className="btn-resume"
              role="button"
              rel="noreferrer"
            >
              <button>
                Resume <i className="uil uil-download-alt"></i>
              </button>
            </a>

            {/* SocialIcons */}
            <Socials />
          </div>

          <div
            className="hero-right"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <img draggable="false" className="pic" src={pic} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
