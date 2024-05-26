import React from "react";

const Socials = () => {
  return (
    <>
      <div className="social-media">
        <ul className="social-content">
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/letadz/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              className="github"
              href="https://github.com/letadz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
