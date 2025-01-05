import { useState, useEffect } from "react";
// import "./App.css";
import { TodoProvider } from "./context/index";
import { TodoForm, TodoItem } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);
  //Add Todo
  const addTodo = (todo) => {
    //accessprevious todos and then adding new one, if we just do..
    //seTodos(todo) it will delete the previous one then add the new one
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]); //destructuring with spread
  };
  //Update Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (
        prevTodo?.id === id ? todo : prevTodo
      ))
    );
  };
  //Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  //ToggleComplete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  //Getting the Todos from Local Storage
  useEffect(() => {
    //local storage will get and add items via string format only
    //but in our case we are handling with json so to handle that will use
    //JSON.parse to parse it from string to json
    const parsedTodos = JSON.parse(localStorage.getItem("todos"));
    if (parsedTodos && parsedTodos.length > 0) {
      setTodos(parsedTodos);
    }
  }, []);

  //storing the todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log(todos)
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
