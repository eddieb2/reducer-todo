import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

//ANCHOR STYLES HERE //
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

//ANCHOR COMPONENT HERE //
const TodoForm = props => {
  const classes = useStyles();

  return (
    <FormWrapper
      className={classes.root}
      onSubmit={e => {
        e.preventDefault();
        props.dispatch({ type: "ADD", payload: props.task });
        props.setTask("");
      }}
    >
      <TextField
        value={props.task}
        name="task"
        id="task"
        type="text"
        variant="outlined"
        onChange={e => {
          props.setTask(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <Button type="submit" variant="outlined">
        Add Task
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={e => {
          e.preventDefault();
          props.dispatch({
            type: "REMOVE"
          });
        }}
      >
        Clear
      </Button>
    </FormWrapper>
  );
};

export default TodoForm;
