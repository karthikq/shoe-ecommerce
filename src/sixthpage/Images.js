/** @format */

import React from "react";

const Images = ({ src }) => {
  return (
    <div className="sixth-shoe-images">
      {" "}
      <img src={src} alt="" />
      <div className="sixth-text">
        <h2>Nike Shoe</h2>
        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Images;
