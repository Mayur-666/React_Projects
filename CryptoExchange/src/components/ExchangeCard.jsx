import React from "react";

const ExchangeCard = ({ name, image, rank, url }) => {
  return (
    <a id="exchanges" href={url} target="blank" noreferrer="true">
      <div className="img_container">
        <img src={image} alt="exchanges" />
        <h3>{rank}</h3>
        <p>{name}</p>
      </div>
    </a>
  );
};

export default ExchangeCard;
