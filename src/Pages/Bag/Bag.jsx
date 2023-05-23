import React, { useContext } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "./bag.css";
import Footer from "../../Components/Footer/Footer";
import SignUp from "../../Components/SignUp/SignUp";
import CartContext from "../../CartContext";
import { Link } from "react-router-dom";
import AnimatedPage from "../../Components/AnimatedPage";

const Bag = () => {
  const { cartItems, onAddQuantity, onRemoveQuantity, onDelete } =
    useContext(CartContext);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <AnimatedPage>
      {cartItems.length === 0 ? (
        <div className="empty">
          <h2 className="emtpy-header">Your Bag Is Empty</h2>
          <p>
            Once you add something to your bag, it will apear here. Ready to get
            started?
          </p>
          <Link className="link" to="/Elegant-Store">
            <button className="empty-button">Get Started</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="bag">
            <h2 className="bag-header">Your Bag</h2>
            <div className="bag-container">
              <div className="bag-left">
                <div className="bag-content">
                  {cartItems.map((product) => (
                    <div className="bag-item">
                      <img src={`${product.src}`} />
                      <div className="items-container">
                        <div className="items-info">
                          <h3>{product.title}</h3>
                          <p>
                            <span>Color:</span> {product.colors[0]}
                          </p>
                          <p>
                            <span>Brand:</span> {product.description}
                          </p>
                          <p>
                            <span>Size:</span> {product.size[0]}
                          </p>
                          <p className="sleeve">
                            <span>Sleeve:</span> {product.sleeve}
                          </p>
                          <div className="items-buttons">
                            <button
                              className="left-button"
                              disabled={product.qty < 2}
                              onClick={() => onRemoveQuantity(product)}
                            >
                              {/* <MinusOutlined /> */}-
                            </button>
                            <span>{product.qty}</span>
                            <button
                              className="right-button"
                              disabled={product.qty > 9}
                              onClick={() => onAddQuantity(product)}
                            >
                              {/* <PlusOutlined /> */}+
                            </button>
                          </div>
                        </div>
                        <div className="item-price">
                          <DeleteOutlined
                            onClick={() => onDelete(product)}
                            style={{
                              fontSize: "22px",
                              color: "red",
                              cursor: "pointer",
                            }}
                          />
                          <p>${product.price * product.qty}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bag-right">
                <div className="summary">
                  <h3>ORDER SUMMARY</h3>
                  <div>
                    <p>Subtotal</p>
                    <p>${itemsPrice}</p>
                  </div>
                  <div>
                    <p>Shipping</p>
                    <p>${shippingPrice}</p>
                  </div>
                  <div>
                    <p>Sales Tax</p>
                    <p>-</p>
                  </div>
                  <div>
                    <h6>Total</h6>
                    <h6>${totalPrice}</h6>
                  </div>
                </div>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </>
      )}

      <div>
        <SignUp />
      </div>
      <div>
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Bag;
