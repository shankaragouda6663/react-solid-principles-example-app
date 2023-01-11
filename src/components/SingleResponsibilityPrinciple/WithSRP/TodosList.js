import Todoitem from "./TodoItem";

const TodosList = ({todos}) => {

    const renderTodos = () => {
        return todos.map(todo => {
            return <Todoitem id={todo.id} title={todo.title} />
        });
    };
  
    return <ul>{renderTodos()}</ul>;
}

export default TodosList;

