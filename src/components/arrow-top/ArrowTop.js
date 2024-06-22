import React, { useState, useEffect } from "react";
import ArrowBtn from "../../assets/icon/arrow-button.png";
import "./ArrowTop.css";

const ArrowTop = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setShowScrollUp(true) : setShowScrollUp(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
