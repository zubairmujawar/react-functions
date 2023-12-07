import React from "react";

const Button = ({onBtnClicked }) => {
  const buttonName = [
    "*",
    "C",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "-",
    "=",
  ];

  return (
    <div className="btnDiv">
      {buttonName.map((name) => (
        <button key={name} onClick={() => onBtnClicked(name)}>{name}</button>
      ))}
    </div>
  );
};

export default Button;
