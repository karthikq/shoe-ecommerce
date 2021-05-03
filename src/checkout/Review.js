/** @format */

import React from "react";

const Review = ({ token }) => {
  return (
    <div className="review-page">
      <h2>Order Summary</h2>
      <div className="review-contentents">
        {token.live.line_items.map((product) => (
          <div className="ordered-elements">
            <div className="orderrd-img">
              <img src={product.media.source} alt="" />
            </div>
            <h3> {product.name} </h3>

            <p className="qauntity">{`Quantity : ${product.quantity}`}</p>
            <p className="price">{product.line_total.formatted_with_symbol}</p>
          </div>
        ))}
      </div>
      <div className="order-total">
        <h3>Total :</h3>
        <p className="total-price">
          {token.live.subtotal.formatted_with_symbol}
        </p>
      </div>
    </div>
  );
};

export default Review;
