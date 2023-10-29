import React, { useState, useEffect } from "react";
import ArrowBtn from "../../assets/logo/arrow-button.png";
import "./ArrowTop.css";

const ArrowTop = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShowScrollUp(true) : setShowScrollUp(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollUp && (
        <img
          src={ArrowBtn}
          alt="arrow"
          draggable="false"
          className="arrow-btn"
          onClick={scrollUp}
        />
      )}
    </div>
  );
};

export default ArrowTop;
