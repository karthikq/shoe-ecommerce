/** @format */
import React from "react";

import Lottie from "react-lottie";
import * as Loader2 from "./assests/746-shopping-cart.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader2.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie
        className="lottie"
        options={defaultOptions}
        height={300}
        width={300}

      />
    </>
  );
};

export default Loader;
