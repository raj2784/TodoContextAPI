import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "",
      completed: false,
    },
  ],
  // declaring function here and logic adding while call context in the app.jsx
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
