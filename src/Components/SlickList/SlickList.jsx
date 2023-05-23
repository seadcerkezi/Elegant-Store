import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./slickList.css";

const SlickList = ({ product, page }) => {
  const [over, setOver] = useState(false);
  return (
    <div className="slik-container">
      <div
        className="slik-img"
        alt=""
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Link to={`/singleProduct/${product.id}`}>
          {page ? (
            <img src={over ? product.src3 : product.src} />
          ) : (
            <img src={product.src} />
          )}
        </Link>
      </div>
      <div className="slik-body">
        <Link to={`/singleProduct/${product.id}`} className="slik-bodyTitle">
          <h5>{product.title}</h5>
        </Link>
        <p>{product.description}</p>
        <p className="slik-color">
          {product.colors.length > 1
            ? `${product.colors.length} Colours`
            : `${product.colors.length} Colour`}
        </p>
        <h5>${product.price}</h5>
      </div>
    </div>
  );
};
export default SlickList;
