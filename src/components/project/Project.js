import React from "react";
import "./Project.css";
import Projects from "./ProjectData";

const Project = () => {
  return (
    <div id="project" className="project" data-aos="fade-right">
      <div className="container">
        <span className="project-title" data-aos="fade-right">
          Projects
        </span>

        {/* Project Data */}
        <Projects />
      </div>
    </div>
  );
};

export default Project;
