import React from "react";
import { products } from "../../data";
import Card from "../Cards/Card";
import "./cardScroll.css";

const CardScroll = ({ title }) => {
  return (
    <div className="cardScroll-container">
      <h3 className="title">{title}</h3>
      <div className="cards">
        {products.map(
          (product) => product.id < 5 && <Card product={product} />
        )}
      </div>
    </div>
  );
};

export default CardScroll;
