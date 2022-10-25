import React from "react";
import "./Skills.css";
import HTML from "../../assets/tech-skills/html.png";
import CSS from "../../assets/tech-skills/css.png";
import Javascript from "../../assets/tech-skills/javascript.png";
import Bootstrap from "../../assets/tech-skills/bootstrap.png";
import SASS from "../../assets/tech-skills/sass.png";
import Reactjs from "../../assets/tech-skills/react.png";
import Mysql from "../../assets/tech-skills/mysql.png";
import Git from "../../assets/tech-skills/git.png";
import GitHub from "../../assets/social-media/github.png";
import Photoshop from "../../assets/tech-skills/photoshop.png";

const Skills = () => {
  return (
    <div className="cards">
      <div className="card-item">
        <img src={HTML} className="card-logo" alt="HTML" />
        <span>HTML</span>
      </div>

      <div className="card-item">
        <img src={CSS} className="card-logo" alt="CSS" />
        <span>CSS</span>
      </div>

      <div className="card-item">
        <img src={Javascript} className="card-logo" alt="Javascript" />
        <span>Javascript</span>
      </div>

      <div className="card-item">
        <img src={Bootstrap} className="card-logo" alt="Bootstrap" />
        <span>Bootstrap</span>
      </div>

      <div className="card-item">
        <img src={SASS} className="card-logo" alt="SASS" />
        <span>SASS</span>
      </div>

      <div className="card-item">
        <img src={Reactjs} className="card-logo" alt="Reactjs" />
        <span>Reactjs</span>
      </div>

      <div className="card-item">
        <img src={Mysql} className="card-logo" alt="Mysql" />
        <span>MySQL</span>
      </div>

      <div className="card-item">
        <img src={Git} className="card-logo" alt="Git" />
        <span>Git</span>
      </div>

      <div className="card-item">
        <img src={GitHub} className="card-logo" alt="GitHub" />
        <span>GitHub</span>
      </div>

      <div className="card-item">
        <img src={Photoshop} className="card-logo" alt="Photoshop" />
        <span>Photoshop</span>
      </div>
    </div>
  );
};

export default Skills;
