import React, { useState } from "react";
import "./card.css";

const Card = ({ product }) => {
  const [changeImg, setChangeImg] = useState(false);

  const mouse = () => {
    setChangeImg(true);
  };

  const out = () => {
    setChangeImg(false);
  };
  return (
    <div className="card-container">
      <div className="card-image" onMouseOver={mouse} onMouseOut={out}>
        <img src={changeImg === true ? product.src2 : product.src} />
      </div>
      <div className="content">
        <h4 className="title">{product.title}</h4>
        <p>{product.description}</p>
        <p>
          {product.colors.length}{" "}
          {product.colors.length > 1 ? "Colours" : "Color"}
        </p>
        <h4 className="price">${product.price}</h4>
      </div>
    </div>
  );
};

export default Card;
