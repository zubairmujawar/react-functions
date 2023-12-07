import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const Todo = () => {
  const [todo, settodo] = useState([]);
  //todo app refrence KG codding 5h:50min:23sec

  const KeyDown = (e) => {
    if (e.key === "Enter") {
      let Item = e.target.value;
      e.target.value = "";
      let newItem = [Item, ...todo];
      settodo(newItem);
    }
  };

  return (
    <MainContainer>
      <Input />
      <div className="liDiv">
        {todo?.map((item) => (
          <li key={item}>
            {item}
            <button className="btn">Delete</button>
          </li>
        ))}
      </div>
    </MainContainer>
  );
};

export default Todo;

const MainContainer = styled.div`
  border: 2px solid black;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  .todoInput {
    padding: 12px;
    margin: 7px;
    border-radius: 4px;
    border: 2px solid black;
  }
  .liDiv {
    display: flex;
    flex-direction: column-reverse;
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }
  .liDiv li {
    border: 1px solid red;
    padding: 10px;
    margin: 10px;
  }
  .liDiv button {
    /* border: 1px solid black; */
    float: right;
    padding: 10px;
    font-size: 15px;
    background-color: #2196f3;
    border-radius: 5px;
    text-align: center;
    margin: 3px 10px;
    height: 40px;
    cursor: pointer;
    font-family: "poppins";
  }
`;
