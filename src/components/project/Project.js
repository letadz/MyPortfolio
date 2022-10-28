import React from "react";
import "./Project.css";
import Projects from "./ProjectData";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="container">
        <span
          className="project-title"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          Projects
        </span>

        {/* Project Data */}
        <Projects />
      </div>
    </div>
  );
};

export default Project;
