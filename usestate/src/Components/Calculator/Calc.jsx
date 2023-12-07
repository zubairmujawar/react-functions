import React, { useState } from "react";
import Button from "./Button";
import Input from "../Input";
const Calc = () => {
  
  const [value, setvalue] = useState("");
  const onButtonClicked = (buttonText) => {
    console.log(buttonText)
    if (buttonText === "=") {
      const result = eval(value);
      setvalue(result);
    } else if (buttonText === "C") {
      setvalue("");
    } else {
      const displayValue = value + buttonText;
      setvalue(displayValue);
    }
  };

  return (
    <div className="cantainer">
      <div className="calcDiv">
        <Input valueInput={value} />
        <Button onBtnClicked={onButtonClicked}/>
      </div>
    </div>
  );
};

export default Calc;
