import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

//ANCHOR COMPONENT HERE //
const TodoList = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState();

  console.log("state:", state);

  return (
    <div>
      <TodoForm dispatch={dispatch} task={task} setTask={setTask} />
      <div>
        {state.map(task => (
          <Todo task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
