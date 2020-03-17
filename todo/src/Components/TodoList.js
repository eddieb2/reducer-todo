import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Todo from "./Todo";

//ANCHOR COMPONENT HERE //
const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      {state.map(task => (
        <Todo task={task} />
      ))}
    </div>
  );
};

export default TodoList;
