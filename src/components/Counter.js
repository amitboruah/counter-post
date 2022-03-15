import React, { useState } from "react";
import "./Style/Counter.css";

export default function Counter() {
  const [counter, setcounter] = useState(0);
  const [input, setInput] = useState("");

  const increase = () => {
    setcounter((count) => counter + parseInt(input));

    if (counter >= 99) {
      document.getElementById("count").style.color = "green";
    } else if (counter < -100) {
      document.getElementById("count").style.color = "red";
    } else {
      document.getElementById("count").style.color = "black";
    }
  };
  const decrease = () => {
    if (counter <= -99) {
      document.getElementById("count").style.color = "red";
    } else if (counter > 100) {
      document.getElementById("count").style.color = "green";
    } else {
      document.getElementById("count").style.color = "black";
    }
    setcounter((count) => counter - parseInt(input));
  };
  return (
    <div className="counter">
      <h1>Counter</h1>
      <span className="output" id="count">
        {counter}
      </span>
      <div className="container">
        <button className="btn" onClick={increase}>
          +
        </button>
        <input value={input} onInput={(e) => setInput(e.target.value)} />
        <button className="btn" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}
