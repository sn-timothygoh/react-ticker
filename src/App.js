import React, { useState, useEffect } from "react";
import "./styles.css";

import Ticker from "./ticker";

export default function App() {
  const [current, setCurrent] = useState(-1);

  function rand(min, max) {
    var offset = min;
    var range = max - min + 1;
    var randomNumber = Math.floor(Math.random() * range) + offset;
    return randomNumber;
  }

  function seq(size) {
    let i = current;
    setCurrent(++i);
    if (i <= size) return i;
    else {
      setCurrent(-1);
      return 0;
    }
  }

  const [move] = useState(true);

  const quotes = [
    "First line of text data",
    "Second line of text data",
    "Third line of text data",
    "Forth line of text data",
    "Fifth line of text data",
    "Sixth line of text data",
    "Seventh line of text data",
    "Eighth line of text data",
    "Nineth line of text data",
    "Tenth line of text data"
  ];

  return (
    <div
      style={{
        background: "#ADD8E6",
        height: "100vh",
        width: "100vh",
        padding: 0
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Ticker offset="100%" move={move} speed={20}>
          {(index) => (
            <h3
              style={{
                clear: "both",
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "normal",
                color: "#FFF"
              }}
            >
              {quotes[rand(0, quotes.length - 1)]}
            </h3>
          )}
        </Ticker>
      </div>
      <div
        style={{
          marginTop: "10px",
          background: "rgba(0, 0, 0, 0.3)",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Ticker offset="100%" move={move} speed={10}>
          {(index) => (
            <h3
              style={{
                clear: "both",
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: "#FFF"
              }}
            >
              {quotes[seq(quotes.length - 1)]}
            </h3>
          )}
        </Ticker>
      </div>
    </div>
  );
}
