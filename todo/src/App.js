import React from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

function App() {
  return (
    <div>
      <h1>Todo List!</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
