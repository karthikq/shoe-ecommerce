/** @format */

import React, { useState } from "react";
import "./fortpage.css";
import shoe4 from "./images/greyshoe.png";
import { BiShoppingBag } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Fortpage = ({ handleToCart }) => {
  const [check, setCheck] = useState(false);
  const greySoe = {
    id: "prod_VPvL5z44NwAQkX",
    price: "₹3,000.00",
  };
  function handleCart() {
    setCheck(true)
    handleToCart(greySoe.id, 1);
  }
  setTimeout(() => {
    setCheck(false);
  }, 6000);
  return (
    <div className="forthpage-container">
      <div className="fp-contents">
        <div className="shoe-3">
          <img src={shoe4} alt="" />
        </div>

        <div className="fp-text">
          <h2>Nike Grand</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            pariatur.
          </span>
          <h4 className="price-details">{greySoe.price}</h4>
          <button onClick={handleCart}>
            {check ? "Added " : "Add to cart"} {check ? (
              <FaCheck className="bag-icon" />
            ) : (
              <BiShoppingBag className="bag-icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fortpage;
