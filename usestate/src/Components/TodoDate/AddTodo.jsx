import React from "react";
import Items from "./Items";
const AddTodo = () => {
  return (
    <div className="cantainer">
      <div className="row">
        <div className="inputDiv">
          <input
            type="text"
            id="text"
            placeholder="Enter todo"
            className="todoInput"
          />
        </div>
        <div className="inputDiv">
          <input type="date" className="todoInput" />
        </div>
        <div className="inputDiv">
          <button className="btn">Add</button>
        </div>
      </div>
      <Items />

    </div>
  );
};

export default AddTodo;
