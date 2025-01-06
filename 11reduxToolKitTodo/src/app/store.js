//Step-1 : We have to get Configure stor
import { configureStore } from "@reduxjs/toolkit";
//Step:5 assigning all the reducers to store
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
