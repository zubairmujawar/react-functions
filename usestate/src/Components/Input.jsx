import React from "react";

const Input = ({ handelKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        id="input"
        placeholder="write todo.."
        onKeyDown={handelKeyDown}
        className="todoInput"
      />
    </div>
  );
};

export default Input;
