import React from "react";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signup-containter">
      <div className="texts">
        <h2>Sign Up For Newsletters</h2>
        <p>
          Get E-mail updates about our latest shop and
          <span> special offers.</span>
        </p>
      </div>
      <div className="input">
        <input type="text" placeholder="Your email adress" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
