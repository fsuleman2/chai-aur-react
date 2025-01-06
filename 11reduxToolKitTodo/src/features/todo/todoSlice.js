//step-2 : Importing Slice
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

//slice is big version of reducer - reducer is nothing but a function where we write what do to

export const todoSlice = createSlice({
  name: "todo", //any string
  //very slide has its initial state which we can declare inside or outside
  initialState,
  reducers: {
    //reducers will contains basically properties and functions
    //insde params () will get two things always remember that
    //1. state : will give access to all the things which is there in 'initialState'
    //2. action : will get any values from action forex: for removeTodo will get id as an action by this user can remove todo
    addTodo: (state, action) => {
      //defining + impl
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is object
      };
      //pushing or adding the todo
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo?.id === id ? action.payload : prevTodo
      );
    },
    removeTodo: (state, action) => {
      //action will have id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Step 3: Exporting the functionality : with this only will update the state
export const {addTodo,updateTodo,removeTodo} = todoSlice.actions;
//Step 4: we need to make connection(register reducers) with store that this actions exists 
export default todoSlice.reducer;
//if we make one more slice, then same line:43 we need to export
//step:5 is in store.js