import React, { useContext, useState, useEffect } from "react";
import "./singleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import Select from "react-select";
import { HeartOutlined } from "@ant-design/icons";
import CartContext from "../../CartContext";
import SignUp from "../../Components/SignUp/SignUp";
import Footer from "../../Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const SingleProduct = () => {
  const { onAdd, addFavourite } = useContext(CartContext);
  const { id } = useParams();
  const myProduct = products.filter((product) => product.id === id);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  let sizeOptions = [];
  let colorOptions = [];

  myProduct[0].size.map((item) => {
    sizeOptions[sizeOptions.length] = {
      value: `${item}`,
      label: `${item}`,
    };
  });

  myProduct[0].colors.map((item) => {
    colorOptions[colorOptions.length] = {
      value: `${item}`,
      label: `${item}`,
    };
  });

  const handleChangeSize = (selectedOption) => {
    setSize(selectedOption.value);
  };

  const handleChangeColor = (selectedOption) => {
    setColor(selectedOption.value);
  };

  return (
    <>
      <div className="single-product">
        <div className="product-images">
          <img src={myProduct[0].src} />
          <img src={myProduct[0].src2} />
          <img src={myProduct[0].src3} />
          <img src={myProduct[0].src4} />
          <img src={myProduct[0].src5} />
        </div>
        <div className="product-text">
          <div className="product-description">
            <h2>{myProduct[0].title}</h2>
            <p>{myProduct[0].description}</p>
            <h4>${myProduct[0].price}</h4>
          </div>
          <div className="select-size">
            <h3>Select Size</h3>
            <Select options={sizeOptions} onChange={handleChangeSize} />
          </div>
          <div className="select-color">
            <h3>Select Color</h3>
            <Select options={colorOptions} onChange={handleChangeColor} />
          </div>
          <div className="product-button">
            <button
              className="product-button1"
              disabled={!size || !color}
              style={
                !color || !size
                  ? { backgroundColor: "#757575", cursor: "auto" }
                  : { backgroundColor: "#222" }
              }
              onClick={() => onAdd(myProduct[0], color, size)}
            >
              Add to Bag
            </button>
            <button
              className="product-button2"
              onClick={() => {
                addFavourite(myProduct[0]);
              }}
            >
              Favourite <HeartOutlined style={{ fontSize: "27px" }} />
            </button>
          </div>
          <div className="product-content">
            <p>{myProduct[0].content}</p>
          </div>
        </div>
      </div>
      <div>
        <SignUp />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SingleProduct;
