/** @format */

import React from "react";

import "./sixthpage.css";
import Images from "./Images";
import shoe1 from "./images/8.jpg";
import shoe2 from "./images/10.jpg";
import shoe3 from "./images/11.jpg";
const Sixthpage = () => {
  return (
    <div className="sixth-container">
      <div className="sixth-contents">
        <div className="sixht-main">
          <div className="sixth-shoe-images2">
            <Images className="img1" src={shoe2} />
            <Images src={shoe1} />
            <Images src={shoe3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixthpage;
