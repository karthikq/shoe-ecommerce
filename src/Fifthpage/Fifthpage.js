/** @format */

import React from "react";
import "./fifthpage.css";

import { BiShoppingBag } from "react-icons/bi";
import shoeData from "./Shoedata";

const Fifthpage = ({ handleToCart, getProduct }) => {
  return (
    <div className="fifthpage">
      <div className="fifthpage-contents">
        <div className="img-contents">
          <div className="images-shoe">
            {shoeData &&
              shoeData.map((data, index) => {
                return (
                  <div key={index} className="images-main">
                    <img id={data._id} src={data.src} alt="Error" />
                    <div className="text-itemss">
                      <h3>{data.name}</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <h6>{data.price}</h6>
                    </div>
                    <div className="buy-items">
                      <button onClick={() => handleToCart(data._id, 1)}>
                        Add to cart <BiShoppingBag className="bag-icon" />{" "}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
