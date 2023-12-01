import React, { useState } from "react";

const Calculator = () => {
  const [input, setinput] = useState("");
  const inputButtons = [
    "C",
    "/",
    "*",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "-",
    "0",
    "="
  ];

  const eventHandler = (e) => {
    setinput(input.concat(e.target.value));
  };
  const notInput = () => {
    alert("ok");
  };
  const calculate = () => {
    setinput(eval(input).toString());
  };
  const clearInput = () => {
    setinput("");
  };
  return (
    <div className="container">
      <input
        type="text"
        className="input"
        placeholder="00"
        value={input}
        onChange={(e) => calculate(e.target.value)}
      />
      <div className="container-btn">
        {inputButtons.map((button) => (
          <button
            key={button}
            className="button"
            onClick={() => {
              if (button === "=") {
                calculate();
              } else if (button === "C") {
                clearInput();
              } else if (button === "") {
                notInput();
              } else {
                eventHandler({ target: { value: button } });
              }
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
