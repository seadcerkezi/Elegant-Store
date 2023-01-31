import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="contact">
          <h2>Contact</h2>
          <p>
            <span>Address:</span> 562 Wellington Road, Street 32, San Francisco
          </p>
          <p>
            <span>Phone:</span> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p>
            <span>Hours:</span> 10:00 - 18:00, Mon - Sat
          </p>
        </div>
        <div>
          <h2>Follow us</h2>
          <h4>© All Rights Reserved</h4>
        </div>
      </div>
      <div>
        <h2>About</h2>
        <h6>About us</h6>
        <h6>Delivery Information</h6>
        <h6>Privacy Policy</h6>
        <h6>Terms & Conditions</h6>
        <h6>Contact us</h6>
      </div>
      <div>
        <h2>My Account</h2>
        <h6>Sign In</h6>
        <h6>View Cart</h6>
        <h6>My Wishlist</h6>
        <h6>Track My Order</h6>
        <h6>Help</h6>
      </div>
      <div>
        <h2>Install App</h2>
        <p>From App Store or Google Play</p>
      </div>
    </div>
  );
};

export default Footer;
