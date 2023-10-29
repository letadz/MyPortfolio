import React from "react";
import proj1 from "../../assets/project/proj1.png";
import proj2 from "../../assets/project/proj2.png";
import proj3 from "../../assets/project/proj3.png";

const ProjectData = () => {
  return (
    <>
      <div className="project-content">
        <div className="project-left">
          <div className="proj-card">
            <img src={proj1} alt="project" />
          </div>
        </div>

        <div className="project-right">
          <div className="tech-used">
            <span>Landing Page</span>
            <span>Web Development</span>
          </div>

          <div>
            <span className="proj-title">Letadz Bootcamp </span>
          </div>

          <div>
            <span className="proj-description">
              A website for Web Development Bootcamp. This website is built to
              help students for registration processes.
            </span>
          </div>

          <div className="proj-link">
            <a
              href="https://letadz.github.io/ResponsiveWebProject/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="proj-btn">Live Demo</button>
            </a>

            {/* <a
              className="github"
              href="https://github.com/letadz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github"></i>
            </a> */}
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="project-content">
        <div className="project-left" data-aos="fade-right">
          <div className="proj-card">
            <img src={proj2} alt="project" />
          </div>
        </div>

        <div className="project-right" data-aos="fade-right">
          <div className="tech-used">
            <span>Reactjs</span>
            <span>Web Development</span>
          </div>

          <div>
            <span className="proj-title">Mag's Auto Repair</span>
          </div>

          <div>
            <span className="proj-description">
              A website for Car services. This website is built to help
              customers schedule to repaired their vehicles.
            </span>
          </div>

          <div className="proj-link">
            <a
              href="https://kodego-group-project.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="proj-btn">Live Demo</button>
            </a>

            {/* <a
              className="github"
              href="https://github.com/arbieabesamis27/Kodego-Group-Project-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github"></i>
            </a> */}
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="project-content">
        <div className="project-left" data-aos="fade-right">
          <div className="proj-card">
            <img src={proj3} alt="project" />
          </div>
        </div>

        <div className="project-right" data-aos="fade-right">
          <div className="tech-used">
            <span>MongoDB</span>
            <span>Express</span>
            <span>Reactjs</span>
            <span>Nodejs</span>
          </div>

          <div>
            <span className="proj-title">Mag's Auto Repair</span>
          </div>

          <div>
            <span className="proj-description">
              A website for Car services. This website is built to help
              customers schedule to repaired their vehicles. Just log in to book
              a schedule.
            </span>
          </div>

          <div className="proj-link">
            <a
              href="https://mags-auto-repair.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="proj-btn">Live Demo</button>
            </a>

            {/* <a
              className="github"
              href="https://github.com/letadz/kodegoCapstone"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github"></i>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectData;
