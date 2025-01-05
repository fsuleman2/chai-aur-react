import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //model - Definiations
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const TodoProvider = TodoContext.Provider;
export const useTodoContext = () => {
  return useContext(TodoContext);
};
//Ek baat yaad rakhiye ga jab bhi useContext use karte hai, us ko Context dena padhta hai, batana padhta hai
//kis context k barey mai baad kar rahe hai
