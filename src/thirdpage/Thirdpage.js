/** @format */

import React, { useState } from "react";
import Redshoe from "./images/redshoe.png";
import "./thirdpage.css";
import { FaCheck } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

const Thirdpage = ({ handleToCart }) => {
  const [check, setCheck] = useState(false);

  const redShoedetails = {
    _id: "prod_yA6nld114wEWbz",
    price: "₹3,500.00",
  };
  function handleCart() {
    setCheck(true);

    handleToCart(redShoedetails._id, 1);
  }
  setTimeout(() => {
    setCheck(false);
  }, 6000);

  return (
    <div className="third-page-container" id="third-page">
      <div className="third-page-contents">
        <div className="third-page-items">
          <div className="text-items">
            <h2>Nike Running Shoes </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, ullam. Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet.
            </p>
            <h4 className="price-details">{redShoedetails.price}</h4>
            <button onClick={handleCart}>
              {check ? "Added " : "Add to cart"}{" "}
              {check ? (
                <FaCheck className="bag-icon" />
              ) : (
                <BiShoppingBag className="bag-icon" />
              )}
            </button>
          </div>
        </div>
        <div className="third-shoe">
          <img src={Redshoe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
