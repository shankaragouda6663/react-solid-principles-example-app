import { Fragment, useEffect, useState } from "react";
import axios from 'axios';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  // 1. Fetching data from API.
  useEffect(() => {
      async function getTodos() {
          const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
          const firstTen = data.slice(0, 10);
          setTodos(firstTen);
      };
      getTodos();
  }, []);

  // 2. Converting todo array into list of React elements.
  const renderTodos = () => {
      return todos.map(todo => {
          return (
              <li key={todo.id}>
                  {`ID: ${todo.id}, Title: ${todo.title}`}
              </li>
          )
      });
  };

  // 3. Structuring and displaying the todos.
  return (
      <div>
          <h5>My Todos:</h5>
          <ul>
              {renderTodos()}
          </ul>
      </div>
  )
};

export default function WithoutSRP() {  
    return (
      <Fragment>
        <h1>Single Responsibility Principle (SRP)</h1>
        <h3>Every function/class/component should do exactly one thing</h3>
        <h4>Without using SRP:</h4>
        <TodosPage />
      </Fragment>
    );
  }

