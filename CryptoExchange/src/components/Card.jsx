import React from "react";

const Card = ({ pic, name, price, symbol }) => {
  return (
    <div className="card">
      <img src={pic} alt="image_of_coin" />
      <h3 className="card_title">{name}</h3>
      <p>({symbol})</p>
      <div>₹ {price}</div>
    </div>
  );
};

export default Card;
