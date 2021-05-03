/** @format */

import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Nabaritems from "../Cart/Navbaritems";
import Badge from "@material-ui/core/Badge";
import { motion } from "framer-motion";
const Navbar = ({ cart, sidebar, handleBars }) => {
  const [badge, seetBadge] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (window.pageYOffset > 1100) {
      seetBadge(true);
    } else {
      seetBadge(false);
    }
  }
  return (
    <>
      {window.removeEventListener("scroll", handleScroll)}
      <div className={!sidebar ? "cart-icon" : "cart-active"}>
        <Link
          to="#"
          className={!sidebar && "bars-icon"}
          style={{ textDecoration: "none", color: " black " }}>
          {badge ? (
            <Badge badgeContent={cart.total_items} color="primary">
              <FaIcons.FaBars onClick={handleBars} />
            </Badge>
          ) : (
            <FaIcons.FaBars onClick={handleBars} />
          )}
        </Link>
      </div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={sidebar ? { opacity: 1 } : { opacity: 0 }}
        className={sidebar ? "menu-items active" : "menu-items"}>
        <Link to="#">
          <motion.div
            initial={{ x: 100 }}
            animate={sidebar ? { x: 0 } : { x: 100 }}
            transition={{ duration: 1 }}>
            <AiIcons.AiOutlineClose
              className="close-icon"
              onClick={handleBars}
            />
          </motion.div>
        </Link>

        <ul className="nav-items">
          {Nabaritems.map((item, index) => {
            return (
              <Link key={index} to={item.path} className="link-tag">
                <motion.li
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    sidebar ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{ duration: 1 }}
                  key={index}
                  className={item.cName}
                  onClick={handleBars}>
                  <p>{item.title}</p>
                </motion.li>
              </Link>
            );
          })}
          <Link to="/items/cart" className="link-tag">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={sidebar ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}>
              <Badge badgeContent={cart.total_items} color="primary">
                <motion.li>
                  <p>Cart</p>
                </motion.li>
              </Badge>
            </motion.div>
          </Link>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
