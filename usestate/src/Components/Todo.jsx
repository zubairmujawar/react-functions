import React, { useState } from "react";
import styled from "styled-components";
const Todo = () => {
    // const [todo, settodo] = useState([])
    let todo = ["this is a todo", "this is a todo", "this is a todo","this is a todo"]
  return (
    <MainContainer>
      <input
        type="text"
        name=""
        // value={todo}
        id="input"
        placeholder="your todo.."
        className="todoInput"
      />
      <div className="liDiv">
        {
            // todo.map(()=><li>This is a todo</li>)
        }
        <button>Delete</button>
        
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
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }
  .liDiv li {
    border: 1px solid red;
    padding: 10px;
    margin: 10px;
  }
  .liDiv button {
    border: 1px solid black;
    padding: 6px;
    background-color: #2196f3;
    border-radius: 5px;
    margin: 3px;
    height: 40px;
    box-shadow: 5px;
    /* font-size: 20px; */
    /* font-weight: 400; */
    cursor: pointer;
    /* float: right; */
    font-family: "poppins";
  }
`;
