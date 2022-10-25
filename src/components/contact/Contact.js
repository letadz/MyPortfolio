import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div
          className="contact-content"
          data-aos="flip-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <div className="contact-title">
            <span>Get In Touch</span>
          </div>

          <div className="contact-desc">
            <span>
              Got a question or proposal, or just want to say hello? Go ahead.
            </span>
          </div>

          <div className="contact-button">
            <a href="mailto:mrkngl.letada@gmail.com">
              <button className="contact-email">
                Just Send <i className="uil uil-message"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
