/** @format */

import React, { useEffect, useState } from "react";
import "./items.css";
import { Link, useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";
import Loader from "../loader/Loader";
import { IoMdArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Itemselected = ({ match }) => {
  const [items, setItem] = useState({
    media: "",
    price: "",
  });
  const [loader, setLoader] = useState(true);
  const [btn, setBtn] = useState(false);

  let { id } = useParams();
  console.log(id);
  const getProduct = async (productId) => {
    const item = await commerce.products.retrieve(productId);
    console.log(item);
    if (item) setItem(item);
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  const notify = () =>
    toast("Added to Cart!!", {
      autoClose: 5000,
      draggable: true,
      pauseOnHover: true,
    });

  return (
    <div className="item-container">
      <div className="item-padding-2">
        <div className="items">
          {loader ? (
            <Loader />
          ) : (
            <div className="item-contents">
              <div className="item-img">
                <img src={items.media.source} alt="" />
              </div>
              <div className="item-text">
                <h2>{items.name}</h2>

                <div
                  className="qauntity-item"
                  dangerouslySetInnerHTML={{
                    __html: `  ${items.description}`,
                  }}></div>
                <p>{items.price.formatted_with_symbol}</p>
                {!btn && (
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      notify();
                      setTimeout(() => {
                        setBtn(true);
                      }, 1000);
                    }}>
                    Add to cart
                  </button>
                )}
                {btn && (
                  <Link to="/items/cart">
                    <button className="go-to-cart"> Added!! Go to cart</button>{" "}
                  </Link>
                )}
                <ToastContainer
                  pauseOnFocusLoss
                  draggable
                  autoClose={5000}
                  closeOnClick
                />
              </div>
              <span className="span-tag">
                <Link to="/items/">
                  <IoMdArrowBack style={{ color: "black" }} />
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Itemselected;
