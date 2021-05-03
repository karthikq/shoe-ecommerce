/** @format */

import React, { useEffect, useState } from "react";
import "./allshoe.css";
import Lottie from "react-lottie";
import * as Loader2 from "./images/31632-launch.json";
import { BiCartAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const AllShoe = ({ products, cart, handleToCart, getProduct }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [nav, setNav] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader2.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 100) {
      if (!nav) {
        setNav(true);
      }
    }
    if (window.pageYOffset <= 100) {
      setNav(false);
    }
  }
  setTimeout(() => {
    setIsPaused(false);
  }, 2000);

  return (
    <>
      {isPaused ? (
        <div className="lottie-3">
          <Lottie options={defaultOptions} height={100} width={100} />{" "}
        </div>
      ) : (
        <div className="all-container">
          <div className="all-shoe-padding">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="all-main-nav-bar">
              <div className="all-brand">
                <Link to="/" className="link-tag">
                  <h2>SHOE SHOOPER</h2>{" "}
                </Link>
                <div className="lottie-2"></div>
              </div>
              <div className="all-cart">
                <div className={nav ? "sticky" : "icon-cart-2"}>
                  <Link to="/items/cart">
                    <Badge badgeContent={cart.total_items} color="error">
                      <BiCartAlt style={{ color: "white" }} />
                    </Badge>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="all-content">
              {products &&
                products.map((product) => (
                  <div className="shoe-box">
                    <div className="all-img">
                      <Link to={"/items/" + product.id}>
                        <img src={product.media.source} alt="" />
                      </Link>
                    </div>

                    <div className="all-text">
                      <h2>{product.name}</h2>

                      <div
                        className="qauntity-item"
                        dangerouslySetInnerHTML={{
                          __html: `${product.description}`,
                        }}></div>
                      <p className="all-price">
                        {product.price.formatted_with_symbol}{" "}
                      </p>
                    </div>
                    <button onClick={() => handleToCart(product.id, 1)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      )}
      {window.removeEventListener("scroll", handleScroll)}
    </>
  );
};

export default AllShoe;
