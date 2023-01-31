import { ControlOutlined } from "@ant-design/icons";
import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import CartContext from "../../CartContext";
import Card from "../../Components/Cards/Card";
import Footer from "../../Components/Footer/Footer";
import SignUp from "../../Components/SignUp/SignUp";
import { products } from "../../data";
import { useParams } from "react-router-dom";
import "./women.css";

const Women = () => {
  const [filters, setFilters] = useState({});
  const [clicked, setClicked] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter((item) => item.category === "women")
  );
  const [sort, setSort] = useState("");

  const filteredColors = [
    ...new Set(
      products
        .filter((item) => item.category === "women")
        .flatMap((item) => item.colors)
    ),
  ].map((color) => ({ label: color, value: color }));
  const filteredDescription = [
    ...new Set(
      products
        .filter((item) => item.category === "women")
        .flatMap((item) => item.description)
    ),
  ].map((description) => ({ label: description, value: description }));
  const filteredSleeve = [
    ...new Set(
      products
        .filter((item) => item.category === "women")
        .flatMap((item) => item.sleeve)
    ),
  ].map((sleeve) => ({ label: sleeve, value: sleeve }));
  const filteredSize = [
    ...new Set(
      products
        .filter((item) => item.category === "women")
        .flatMap((item) => item.size)
    ),
  ].map((size) => ({ label: size, value: size }));

  const handleChangeColor = (selectedOption) => {
    setFilters({ ...filters, colors: selectedOption.value });
  };
  const handleChangeBrand = (selectedOption) => {
    setFilters({ ...filters, description: selectedOption.value });
  };
  const handleChangeSleeve = (selectedOption) => {
    setFilters({ ...filters, sleeve: selectedOption.value });
  };
  const handleChangeSize = (selectedOption) => {
    setFilters({ ...filters, size: selectedOption.value });
  };
  console.log(filters);
  const price = [
    { value: "newest", label: "Newest" },
    { value: "price-high", label: "Price: High-Low" },
    { value: "price-low", label: "Price: Low-High" },
  ];

  const clickedFilter = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    setFilteredProducts(
      categoryProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.id - b.id));
    } else if (sort === "price-low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="women-container">
      <div className="filter">
        <h1 className="header-title">WOMAN </h1>
        <button className="filter-button" onClick={clickedFilter}>
          Filter & Sort
          <ControlOutlined />
        </button>
      </div>
      <div className={`${clicked ? "filter-select" : "filter-hidden"}`}>
        <div className="product-select">
          <Select
            placeholder={"Color"}
            options={filteredColors}
            onChange={handleChangeColor}
          />
          <Select
            onChange={handleChangeBrand}
            placeholder={"Brand"}
            options={filteredDescription}
          />
          <Select
            onChange={handleChangeSleeve}
            placeholder={"Sleeve Length"}
            options={filteredSleeve}
          />
          <Select
            onChange={handleChangeSize}
            placeholder={"Size"}
            options={filteredSize}
          />
          {Object.keys(filters).length > 0 && (
            <button onClick={() => setFilters({})}>Clear All</button>
          )}
        </div>
        <div className="product-sort">
          <Select
            placeholder={"Sort By"}
            options={price}
            onChange={(option) => setSort(option.value)}
          />
        </div>
      </div>
      <div className="body">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <NavLink to={`/singleProduct/${product.id}`}>
                <Card product={product} />
              </NavLink>
            ))
          : categoryProducts.map((product) => (
              <NavLink to={`/singleProduct/${product.id}`}>
                <Card product={product} />
              </NavLink>
            ))}
      </div>
      <div>
        <SignUp />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Women;
