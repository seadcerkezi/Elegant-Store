import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/elegant-logo.png";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <NavLink to="/" className="logo">
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
        <div className="search">
          <SearchOutlined style={{ fontSize: "27px" }} />
          <input />
        </div>
        <NavLink to="/favourite">
          <HeartOutlined style={{ fontSize: "27px", color: "#fff" }} />
        </NavLink>
        <NavLink to="/bag" className="links">
          <ShoppingCartOutlined style={{ fontSize: "27px", color: "#fff" }} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
