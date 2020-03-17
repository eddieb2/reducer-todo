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
const TodoForm = () => {
  const classes = useStyles();

  return (
    <FormWrapper className={classes.root}>
      <TextField
        name="task"
        id="task"
        type="text"
        variant="outlined"
      />
      <Button type="submit" variant="outlined" color="secondary">
        Add Task
      </Button>
    </FormWrapper>
  );
};

export default TodoForm;
