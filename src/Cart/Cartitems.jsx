/** @format */

import React from "react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Cartitems = ({ item, handleToUpdate, deleteItem }) => {
  return (
    <motion.div
      layout
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "tween" }}
      className="cart-items">
      <img src={item.media.source} alt="error" />
      <div className="item-details">
        <h2>{item.name}</h2>
        <div className="price-quan">
          <h4>{item.price.formatted_with_symbol}</h4>
          <div className="quantity">
            <GrAdd
              className="add-icon"
              onClick={() => handleToUpdate(item.id, item.quantity + 1)}
            />
            <span>{item.quantity}</span>
            <AiOutlineMinus
              className="minus-icon"
              onClick={() => handleToUpdate(item.id, item.quantity - 1)}
            />
          </div>
        </div>
        <div className="item-btns">
          <Link to="/items/checkout">
            <button className="buy-icon">Buy now</button>
          </Link>

          <button className="delete-icon" onClick={() => deleteItem(item.id)}>
            Delete Item
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cartitems;
