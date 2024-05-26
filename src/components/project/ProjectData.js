import React, { useState } from "react";
import { datas } from "../../constants/data";

const ProjectData = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleShowButton = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div>
      {datas.slice(0, showAllProjects ? datas.length : 3).map((data) => (
        <div key={data.id} className="project-content">
          <div className="project-left">
            <div className="project-card">
              <img src={data.img} alt={data.title} />
            </div>
          </div>

          <div className="project-right">
            <ul className="tech-container">
              <div className="tech-used">
                {data.used.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </div>
            </ul>

            <div>
              <h3 className="proj-title">{data.title}</h3>
            </div>

            <div>
              <p className="proj-description">{data.description}</p>
            </div>

            <div className="proj-link">
              <a href={data.link} target="_blank" rel="noreferrer">
                <button className="proj-btn">Live Demo</button>
              </a>
            </div>
          </div>
        </div>
      ))}

      {datas.length > 3 && (
        <div className="proj-button-container">
          <button onClick={handleShowButton} className="proj-button">
            {showAllProjects ? <span>Show Less</span> : <span>Show More</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectData;
