import React, { useState } from "react";
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
    i === size ? setCurrent(0) : setCurrent(++i);
    return current;
  }

  const [move] = useState(true);

  const quotes = [
    "Breaking News #1: so short",
    "Breaking News #2: This text is very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",
    "Breaking News #3: Lorem ipsum dolor sit amet, consectetur adipiscing elit; xxxx; xxxx;"
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
      <h2>random number</h2>
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
      <h2>sequence number</h2>
      <div
        style={{
          marginTop: "10px",
          background: "rgba(0, 0, 0, 0.3)",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Ticker offset="100%" move={move} speed={15 * 0.8}>
          {(index) => (
            <h3
              style={{
                clear: "both",
                display: "block",
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
