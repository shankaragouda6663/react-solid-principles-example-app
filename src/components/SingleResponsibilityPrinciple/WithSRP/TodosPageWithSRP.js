import { React, Fragment } from "react";
import APIWrapper from './APIWrapper';
import TodosList from "./TodosList";

const TodosPageWithSRP = () => {
  return (
    <Fragment>
       <h3> With using SRP:</h3>
      <h5>My Todos</h5>
      <APIWrapper>
        <TodosList />
      </APIWrapper>
    </Fragment>
  )
}

export default TodosPageWithSRP;
