/** @format */
import React from "react";

import Lottie from "react-lottie";
import * as Loader3 from "./assests/52580-scooter-riding.json";
import * as Loader4 from "./assests/33405-dsad-das-d-as-das.json";
import * as Loader5 from "./assests/29178-cat-in-box.json";

const Loader2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader3.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Loader4.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Loader5.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const laoder = [defaultOptions, defaultOptions2, defaultOptions3];

  const rnumber = Math.floor(Math.random() * 3);

  return (
    <>
      <Lottie options={laoder[rnumber]} height={150} width={200} />
    </>
  );
};

export default Loader2;
