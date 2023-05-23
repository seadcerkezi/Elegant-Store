import React, { useContext, useState } from "react";
import "./singleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import Select from "react-select";
import { HeartOutlined } from "@ant-design/icons";
import CartContext from "../../CartContext";
import SignUp from "../../Components/SignUp/SignUp";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slick from "../../Components/Slick/Slick";

import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import AnimatedPage from "../../Components/AnimatedPage";
SwiperCore.use([Navigation, Pagination]);

const SingleProduct = () => {
  const { onAdd, addFavourite } = useContext(CartContext);
  const { id } = useParams();
  const myProduct = products.filter((product) => product.id === id);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [bagAlert, setBagAlert] = useState(false);

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
    console.log("Selected", selectedOption);
  };

  const showToastMessage1 = () => {
    toast.success("Succsesfully added to Bag!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const showToastMessage2 = () => {
    toast.success("Succsesfully added to Favourite!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <AnimatedPage>
      <div className="single-product">
        <div className="product-images first-img">
          <img src={myProduct[0].src} />
          <img src={myProduct[0].src2} />
          <img src={myProduct[0].src3} />
          <img src={myProduct[0].src4} />
          <img src={myProduct[0].src5} />
        </div>
        <div className="product-images second-img">
          <Swiper navigation pagination className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <img src={myProduct[0].src} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={myProduct[0].src2} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={myProduct[0].src3} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={myProduct[0].src4} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={myProduct[0].src5} />
            </SwiperSlide>
          </Swiper>
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
            {!size || !color ? (
              <div className="disabled-button">
                <p
                  style={{
                    color: bagAlert ? "red" : "white",
                    textAlign: "center",
                  }}
                  className="bag-warning"
                >
                  Select color and size!
                </p>

                <button
                  className="product-button1"
                  style={{ backgroundColor: "#757575", cursor: "auto" }}
                  onMouseOver={() => setBagAlert(true)}
                  onMouseOut={() => setBagAlert(false)}
                >
                  Add To Bag
                </button>
              </div>
            ) : (
              <button
                className="product-button1"
                onClick={() => {
                  onAdd(myProduct[0], color, size);
                  showToastMessage1();
                }}
              >
                Add to Bag
              </button>
            )}

            <button
              className="product-button2"
              onClick={() => {
                addFavourite(myProduct[0]);
                showToastMessage2();
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
        <Slick title="You may also like" arrivals="Gear Up" />
      </div>
      <div>
        <SignUp />
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </AnimatedPage>
  );
};

export default SingleProduct;
