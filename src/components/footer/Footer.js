import React from "react";
import "./Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <div className="footer-content container">
        <span className="footer-text">
          &copy; {year} Letada All Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
