import React from "react";
import { useState } from "react";
const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  
// refrence KG codding 7h:45min
  const addTodo = () => {
    if (todos === "") {
      alert("Please Enter todos");
    } else {
      setTodos([...todos, { userInput, date }]);
      console.log(setTodos);
      setDate("");
      setUserInput("");
      console.log(userInput, date);
    }
  };
  const deleteTodo = (i) => {
    const allTodos = [...todos];
    allTodos.splice(i, 1);
    setTodos(allTodos);
  };

  return (
    <div className="main-div">
      <div className="input-div">
        <input
          type="text"
          placeholder="Enter todo here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <ul className="info" key={index}>
          <li>{todo.userInput}</li>
          <li>{todo.date}</li>
          <button className="btn" onClick={deleteTodo}>
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
};
export default Todo;
