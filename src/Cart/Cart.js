/** @format */

import React, { useState } from "react";
import "./cart.css";

import Cartitems from "./Cartitems";
import { motion } from "framer-motion";
import Loader from "../loader/Loader";
import Loader2 from "../loader/Loader2";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleToUpdate, deleteItem, emptyCart }) => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <motion.div
          initial={{
            clipPath: "circle(11.3% at 0% 0%)",
          }}
          animate={{
            clipPath: "circle(400% at 50% 50%)",
          }}
          transition={{ duration: 3, easings: "anticipate" }}
          className="cart-container">
          <div className="cart-nav-bar">
            <div className="logo-main-cart">
              <Link
                to="/"
                className="link-tag"
                style={{ textDecoration: "none" }}>
                <h3></h3>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delayChildren: 1 }}
              className="all-btn">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                {cart.line_items ? cart.subtotal.formatted_with_symbol : "none"}
              </motion.h3>
              <Link to="/items/checkout">
                <button className="buy-all-btn hvr-hang">Checkout</button>
              </Link>
              <button
                className="empty-cart-btn hvr-hang"
                onClick={() => emptyCart()}>
                Empty Cart
              </button>
            </motion.div>
          </div>

          <div className="cart-contents">
            <div className="mapped-cart">
              {cart.line_items ? (
                cart.line_items.length ? (
                  cart.line_items.map((item, index) => {
                    return (
                      <Cartitems
                        key={index}
                        item={item}
                        handleToUpdate={handleToUpdate}
                        deleteItem={deleteItem}
                      />
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="empty-cart">
                    <Loader2 />
                    <motion.h2 transition={{ delay: 2 }}>
                      Your cart is empty
                    </motion.h2>
                    <a href="/items/cart">
                      <p>Refresh me</p>
                    </a>
                  </motion.div>
                )
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cart;
