import { React, Fragment, useEffect, useState } from "react";
import axios from 'axios';

const APIWrapper = ({children}) => {

    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
        async function getTodos() {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
            const firstTen = data.slice(0, 10);
            setTodos(firstTen);
        };
        getTodos();
    }, []);
  
    // const todoListWithTodos = React.Children.map(
    //   children,
    //   (child) => {
    //     return React.cloneElement(child, { todos: todos })
    //   }
    // )

    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <li key={todo.id}>
                    {`ID: ${todo.id}, Title: ${todo.title}`}
                </li>
            )
        });
    };
    
    return (
      <Fragment>
        {todos.length > 0 ? renderTodos() : null}
      </Fragment>
    )
  }

  export default APIWrapper;