import React from "react";

//ANCHOR COMPONENT HERE //
const Todo = props => {
  return (
    <div>
      <ul>
        <li
          onClick={() =>
            props.dispatch({ type: "TOGGLE", payload: props.task.id })
          }
          style={{
            textDecoration: props.task.completed
              ? "line-through"
              : "none"
          }}
        >
          {props.task.item}
        </li>
      </ul>
    </div>
  );
};

export default Todo;
