import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import Card from "../../Components/Cards/Card";
import { NavLink } from "react-router-dom";
import SignUp from "../../Components/SignUp/SignUp";
import Footer from "../../Components/Footer/Footer";
import "./searchs.css";
import AnimatedPage from "../../Components/AnimatedPage";

function Searchs() {
  const search = useParams();

  const searchedProducts = products.filter((product) =>
    product.description.toLowerCase().includes(search.id.toLowerCase())
  );
  console.log(searchedProducts);
  return (
    <AnimatedPage>
      <div className="men-container">
        <div className="filter">
          <h1>Search for: "{search.id}"</h1>
        </div>
        <div className="body">
          {searchedProducts.map((product) => (
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
    </AnimatedPage>
    //
  );
}

export default Searchs;
