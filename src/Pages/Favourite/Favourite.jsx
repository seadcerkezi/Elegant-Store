import { DeleteOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../CartContext";
import Footer from "../../Components/Footer/Footer";
import SignUp from "../../Components/SignUp/SignUp";
import "./favourite.css";

const Favourite = () => {
  const { favourite, deleteFavourite } = useContext(CartContext);

  return (
    <>
      <div className="fav-container">
        <h2>Wishlist</h2>
        <div className="fav-products">
          {favourite.map((product) => (
            <div className="fav-content">
              <NavLink to={`/singleProduct/${product.id}`}>
                <img src={`${product.src}`} />
              </NavLink>
              <NavLink
                className={"navlink"}
                to={`/singleProduct/${product.id}`}
              >
                <h4>{product.title}</h4>
              </NavLink>
              <p>{product.description}</p>
              <p>{product.colors.length} Colours</p>
              <div className="fav-delete">
                <p>${product.price}</p>

                <DeleteOutlined
                  style={{
                    fontSize: "20px",
                    color: "red",
                  }}
                  onClick={() => deleteFavourite(product)}
                />
              </div>
            </div>
          ))}
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

export default Favourite;
