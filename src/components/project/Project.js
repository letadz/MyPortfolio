import React from "react";
import "./Project.css";
import Projects from "./ProjectData";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="container">
        <span className="project-title">Projects</span>

        {/* Project Data */}
        <Projects />
      </div>
    </div>
  );
};

export default Project;