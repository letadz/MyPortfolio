import React from "react";

const Card = ({ src, title, alt, cardItem, cardLogo }) => {
  return (
    <>
      <div className={cardItem}>
        <img src={src} className={cardLogo} alt={alt} />
        <span>{title}</span>
      </div>
    </>
  );
};

export default Card;
