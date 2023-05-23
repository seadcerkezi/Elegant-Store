import { ControlOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Card from "../../Components/Cards/Card";
import Footer from "../../Components/Footer/Footer";
import SignUp from "../../Components/SignUp/SignUp";
import { products } from "../../data";
import "./men.css";
import AnimatedPage from "../../Components/AnimatedPage";

const Men = () => {
  const [filters, setFilters] = useState({});
  const [clicked, setClicked] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter((item) => item.category === "men")
  );
  const [sort, setSort] = useState("");

  const filteredColors = [
    ...new Set(
      products
        .filter((item) => item.category === "men")
        .flatMap((item) => item.colors)
    ),
  ].map((color) => ({ label: color, value: color }));
  const filteredDescription = [
    ...new Set(
      products
        .filter((item) => item.category === "men")
        .flatMap((item) => item.description)
    ),
  ].map((description) => ({ label: description, value: description }));
  const filteredSleeve = [
    ...new Set(
      products
        .filter((item) => item.category === "men")
        .flatMap((item) => item.sleeve)
    ),
  ].map((sleeve) => ({ label: sleeve, value: sleeve }));
  const filteredSize = [
    ...new Set(
      products
        .filter((item) => item.category === "men")
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
    <AnimatedPage>
      <div className="men-container">
        <div className="filter">
          <h1 className="header-title">MEN </h1>
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
                <Link to={`/singleProduct/${product.id}`}>
                  <Card product={product} />
                </Link>
              ))
            : categoryProducts.map((product) => (
                <Link to={`/singleProduct/${product.id}`}>
                  <Card product={product} />
                </Link>
              ))}
        </div>
        <div>
          <SignUp />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Men;
