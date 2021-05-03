/** @format */

import React, { useState } from "react";
import "./shoes.css";
import shoe from "./Images/shoe.png";
import Lottie from "react-lottie";
import * as Loader2 from "./Images/arrowRightCircle.json";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Shoes = () => {
  const [isPaused, setIspPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader2.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="shoe-items-container">
      <div className="shoe-items-padding">
        <div className="shoe-items-contents">
          <div className="shoe-item-text">
            <h2>Explore More Shoes</h2>
            <div className="shoe-link">
              <Link to="/items">
                <BsArrowRight className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
