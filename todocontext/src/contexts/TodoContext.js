import { createContext, useContext } from "react";
// reference hiteshchoudhary
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "This is a todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
