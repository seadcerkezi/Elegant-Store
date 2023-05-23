import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  MenuOutlined,
  RightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/elegant-logo.png";
import transparentLogo from "../../images/transparent-logo.png";
import { products } from "../../data";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  const menu = () => {
    setMenuClicked(!menuClicked);
  };

  const searchDiv = () => {
    setSearchClicked(!searchClicked);
  };

  const closeMenu = () => {
    setMenuClicked(!menuClicked);
  };

  const closeSearch = () => {
    setSearchClicked(!searchClicked);
    setSearch("");
  };

  const handleSearch = (e) => {
    const filteredProducts = products.filter(
      (product) =>
        product.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchProduct(filteredProducts.slice(0, 3));
    setSearch(e.target.value);
  };
  return (
    <nav>
      <h1>
        <NavLink to="/Elegant-Store" className="logo">
          <img src={logo} className="elegant-logo" />
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/men" className="links">
            MEN
          </NavLink>
        </li>
        <li>
          <NavLink to="/women" className="links">
            WOMEN
          </NavLink>
        </li>
        <li>
          <NavLink to="/kids" className="links">
            KIDS
          </NavLink>
        </li>
        <li>
          <NavLink className="links">SALE</NavLink>
        </li>
        <li>
          <NavLink className="links">COLLECTIONS</NavLink>
        </li>
      </ul>
      <div className="icons">
        <SearchOutlined
          onClick={searchDiv}
          className="search-logo"
          style={{ color: "#fff" }}
        />
        <div onClick={searchDiv} className="search">
          <SearchOutlined
            className="navbar-search"
            style={{ fontSize: "22px" }}
          />
          <input className="input" placeholder="Search" />
        </div>
        <NavLink to="/favourite">
          <HeartOutlined
            className="responsive-icons"
            style={{ color: "#fff" }}
          />
        </NavLink>
        <NavLink to="/bag" className="links">
          <ShoppingCartOutlined
            className="responsive-icons"
            style={{ color: "#fff" }}
          />
        </NavLink>
        <MenuOutlined
          onClick={menu}
          className="menu-bar responsive-icons"
          style={{ color: "#fff" }}
        />
      </div>
      {searchClicked === true ? (
        <>
          <div onClick={closeSearch} className="blur-search"></div>
          <div className="search-div">
            <div className="search-position">
              <NavLink to="/Elegant-Store" className="div-logo">
                <img src={transparentLogo} className="selegant-logo" />
              </NavLink>
              <div className="clicked-search">
                <SearchOutlined
                  className="input-search"
                  style={{ fontSize: "27px" }}
                />
                <input
                  onChange={(e) => handleSearch(e)}
                  className="input"
                  placeholder="Search"
                  style={{
                    fontSize: "16px",
                    outline: "none",
                    paddingLeft: "8px",
                  }}
                />
              </div>
              <h2 onClick={closeSearch}>
                <CloseOutlined
                  className="close-search"
                  style={{
                    fontSize: "25px",
                    borderRadius: "25px",
                    padding: "10px",
                  }}
                />
              </h2>
            </div>
            {search.length > 2 && (
              <div className="search-result">
                {searchProduct.map((product) => (
                  <div className="search-product">
                    <NavLink
                      onClick={closeSearch}
                      className="search-links"
                      to={`/singleProduct/${product.id}`}
                    >
                      <img className="search-result-img" src={product.src} />
                    </NavLink>
                    <div className="search-texts">
                      <NavLink
                        onClick={closeSearch}
                        className="search-links"
                        to={`/singleProduct/${product.id}`}
                      >
                        <p>{product.category}</p>
                      </NavLink>
                      <NavLink
                        onClick={closeSearch}
                        className="search-links"
                        to={`/singleProduct/${product.id}`}
                      >
                        <h5>{product.description}</h5>
                      </NavLink>
                      <NavLink
                        onClick={closeSearch}
                        className="search-links"
                        to={`/singleProduct/${product.id}`}
                      >
                        <h6 className="search-title">{product.title}</h6>
                      </NavLink>
                      <NavLink
                        onClick={closeSearch}
                        className="search-links"
                        to={`/singleProduct/${product.id}`}
                      >
                        <h5>{product.colors.length} Colours</h5>
                      </NavLink>
                      <NavLink
                        onClick={closeSearch}
                        className="search-links"
                        to={`/singleProduct/${product.id}`}
                      >
                        <h6>${product.price}</h6>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* {search != searchProduct && (
              <h2 className="wrong-search">No results for {search}</h2>
            )} */}
            {search.length > 2 && (
              <NavLink to={`/search/${search}`}>
                <button className="view-button" onClick={closeSearch}>
                  View All Products
                </button>
              </NavLink>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      {menuClicked === true ? (
        <>
          <div className="blur-menu" onClick={closeMenu}></div>
          <div className="hamburger-menu">
            <h2 className="close-menu" onClick={closeMenu}>
              X
            </h2>
            <ul className="hamburger-list">
              <li>
                <NavLink onClick={closeMenu} to="/men" className="links">
                  MEN
                  <RightOutlined />
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to="/women" className="links">
                  WOMEN
                  <RightOutlined />
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to="/kids" className="links">
                  KIDS
                  <RightOutlined />
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} className="links">
                  SALE
                  <RightOutlined />
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} className="links">
                  COLLECTIONS
                  <RightOutlined />
                </NavLink>
              </li>
            </ul>
            <div className="login-menu">
              <button className="login-button">Login</button>
              <button className="register-button">Register</button>
            </div>
            <div className="fav-menu">
              <NavLink
                onClick={closeMenu}
                to="/favourite"
                className="links fav-bag"
              >
                <HeartOutlined
                  className="responsive-icons"
                  style={{ color: "#fff" }}
                />
                <h4>FAVOURITE</h4>
              </NavLink>
              <NavLink onClick={closeMenu} to="/bag" className="links fav-bag">
                <ShoppingCartOutlined
                  className="responsive-icons"
                  style={{ color: "#fff" }}
                />
                <h4>BAG</h4>
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
