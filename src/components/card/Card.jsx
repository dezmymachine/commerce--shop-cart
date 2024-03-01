import React from "react";
import "./card.css";

const Cards = ({ item, handleClick }) => {
  const { name, new_price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="card-content">
        <p className="item-name">{name}</p>
        <p className="item-price">Price: GH&#8373; {new_price}</p>
      </div>
      <button onClick={() => handleClick(item)} className="card-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Cards;
