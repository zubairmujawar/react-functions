import React from "react";

const Input = ({ valueInput }) => {
  return (
    <input
      type="text"
      id="input"
      placeholder="write todo.."
      value={valueInput}
      // onChange={valueInput}
      className="todoInput"
      readOnly
    />
  );
};

export default Input;
