import Card from "../card/Card";

import "./Skills.css";
import HTML from "../../assets/tech-skills/html.png";
import CSS from "../../assets/tech-skills/css.png";
import Javascript from "../../assets/tech-skills/javascript.png";
import Bootstrap from "../../assets/tech-skills/bootstrap.png";
import Tailwind from "../../assets/tech-skills/tailwind.png";
import SASS from "../../assets/tech-skills/sass.png";
import Reactjs from "../../assets/tech-skills/react.png";
import Vuejs from "../../assets/tech-skills/vuejs.png";
import Nuxtjs from "../../assets/tech-skills/nuxtjs.png";
// import Mysql from "../../assets/tech-skills/mysql.png";
import Git from "../../assets/tech-skills/git.png";
import GitHub from "../../assets/social-media/github.png";
import Photoshop from "../../assets/tech-skills/photoshop.png";
import Pinia from "../../assets/tech-skills/pinia.png";
import Firebase from "../../assets/tech-skills/firebase.svg";

const Skills = () => {
  return (
    <div className="cards">
      <Card
        src={HTML}
        title="HTML"
        alt="HTML"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={CSS}
        title="CSS"
        alt="CSS"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Javascript}
        title="Javascript"
        alt="Javascript"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Bootstrap}
        title="Bootstrap"
        alt="Bootstrap"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Tailwind}
        title="Tailwind"
        alt="Tailwind"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={SASS}
        title="SASS"
        alt="SASS"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Reactjs}
        title="Reactjs"
        alt="Reactjs"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Vuejs}
        title="Vuejs"
        alt="Vuejs"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Nuxtjs}
        title="Nuxtjs"
        alt="Nuxtjs"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Firebase}
        title="Firebase"
        alt="Firebase"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Pinia}
        title="Pinia"
        alt="Pinia"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      {/* <Card
        src={Mysql}
        title="Mysql"
        alt="Mysql"
        cardItem="card-item"
        cardLogo="card-logo"
      /> */}
      <Card
        src={Git}
        title="Git"
        alt="Git"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={GitHub}
        title="GitHub"
        alt="GitHub"
        cardItem="card-item"
        cardLogo="card-logo"
      />
      <Card
        src={Photoshop}
        title="Photoshop"
        alt="Photoshop"
        cardItem="card-item"
        cardLogo="card-logo"
      />
    </div>
  );
};

export default Skills;
