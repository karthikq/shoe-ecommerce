/** @format */

import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import "./styles.css";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

import s2 from "./images/shoe.png";

import s4 from "./images/shoe2.png";

import s6 from "./images/shoe3.png";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const Secondpage = ({ handleToCart, handleBars }) => {
  const [check, setCheck] = useState(false);
  const shoe1data = {
    _id: "prod_RyWOwm3795nEa2",
    price: "₹500.00",
  };
  function handleClick() {
    setCheck(true);
    handleBars(true);
    handleToCart(shoe1data._id, 1);
  }

  setTimeout(() => {
    setCheck(false);
  }, 6000);
  return (
    <div className="secondpage" id="second-page">
      <div className="sp-contents">
        <div className="img-shoe1">
          <div className="shoe1-contents">
            <Splide
              className="slider-container"
              options={{
                rewind: true,
                perPage: 1,
                perMove: 1,
                gap: "1rem",
                pagination: false,
              }}>
              <SplideSlide>
                <div className="slider">
                  <img src={s2} alt="" />
                  <div className="text-img"></div>
                </div>
              </SplideSlide>
              {/* <SplideSlide>
                <div className="slider">
                  <img src={s3} alt="" />
                  <div className="text-img">
                    <h2>Casual Shoes</h2>
                  </div>
                </div>
              </SplideSlide> */}
              <SplideSlide>
                <div className="slider">
                  <img src={s4} alt="" />
                  <div className="text-img"></div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="slider">
                  <img src={s6} alt="" />
                  <a href="#third-page">
                    <button>Explor now</button>
                  </a>
                </div>
              </SplideSlide>
            </Splide>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 5 }} className="shoe1-maincontents">
            <h2>Nike Casual shoe</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              rem quis excepturi
            </p>
            <h4 className="price-details2">{shoe1data.price}</h4>
            <button onClick={handleClick}>

              Buy now
              {check ? (
                <FaCheck className="bag-icon" />
              ) : (
                <BiShoppingBag className="bag-icon" />
              )}{" "}
            </button>
          </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
