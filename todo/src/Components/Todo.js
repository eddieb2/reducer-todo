import React from "react";

//ANCHOR COMPONENT HERE //
const Todo = props => {
  return (
    <div>
      <ul>
        <li>{props.task.item}</li>
      </ul>
    </div>
  );
};

export default Todo;
