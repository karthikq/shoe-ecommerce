/** @format */

import React, { useState } from "react";
import "./Firstpage.css";
import Navbar from "./Navbar.js";
import { motion } from "framer-motion";
import Loader from "../loader/Loader";
// import brand from "./assests/6.png"
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

const Firstpage = ({ cart, sidebar, handleBars }) => {
  const [loader, setLoader] = useState(false);

  setTimeout(() => {
    setLoader(true);
  }, 2000);

  return (
    <div className="container">
      {loader ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="first-page">
          <motion.div
            initial={{
              y: 0,
              clipPath: " polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            }}
            animate={{
              clipPath: " polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            class="clip-path"></motion.div>
          <div className="firstpage-bg">
            <div className="fp">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "anticipate" }}
                className="logo-main">
                <Link to="/" className="link-tag">
                  <h2 className="brand-name">SHOE SHOPER</h2>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="nav">
                <Navbar
                  handleBars={handleBars}
                  className="cart"
                  cart={cart}
                  sidebar={sidebar}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="firstpage-contents">
                <h2>
                  Grab
                  <span className="change-text">
                    <ReactTypingEffect
                      text={["stylish Footwear", "the Trend"]}
                    />
                  </span>
                </h2>
                <h4> #Trendishere </h4>
                <a href="#second-page">
                  <button className="hvr-bounce-to-top"> Explore more </button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="firstp-loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Firstpage;
