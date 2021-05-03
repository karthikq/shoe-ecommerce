/** @format */

import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Text = () => {
  return (
    <>
      <br />

      <ReactTypingEffect
        text={["Shoes", "Trend"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span style={{ color: "white" }} key={key}>
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default Text;
