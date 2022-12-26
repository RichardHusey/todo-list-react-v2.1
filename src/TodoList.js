import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("total");

  const addTodoList = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { value: todo, completed: false }]);
      setTodo("");
    } else {
      return;
    }
  };

  const deleteTodoItem = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const completeTodoItem = (index) => {
    todos[index].completed = !todos[index].completed;
    setTodos([...todos]);
  };
  const showFilteredTodoLists = (buttonName) => {
    setFilter(buttonName);
  };

  const fileretedTodos = todos.filter((todo) =>
    filter === "total"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );

  return (
    <div className="add-todo">
      <h1> Todo-List : React Version 2 </h1>
      <div className="total">
        <span>
          <button
            style={{ background: filter === "total" ? "red" : "" }}
            onClick={() => showFilteredTodoLists("total")}
          >
            Total-todos
          </button>{" "}
          : {todos.length}
        </span>
        <span>
          <button
            style={{ background: filter === "completed" ? "red" : "" }}
            onClick={() => showFilteredTodoLists("completed")}
          >
            Completed-todos
          </button>{" "}
          : {todos.filter((todo) => todo.completed).length}{" "}
        </span>
        <span>
          <button
            style={{ background: filter === "active" ? "red" : "" }}
            onClick={() => showFilteredTodoLists("active")}
          >
            Active-todos
          </button>{" "}
          : {todos.filter((todo) => !todo.completed).length}{" "}
        </span>
      </div>
      <form className="new-todo-forsm" onSubmit={addTodoList}>
        <input
          placeholder=" Please add Todo"
          name="todo"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add Todo</button>
      </form>

      <ol className="todo-lists">
        {fileretedTodos.map((todo, index) => (
          <div key={index}>
            <li
              className={todo.completed ? "todo-completed" : "todo-incompleted"}
              key={index}
              onClick={() => completeTodoItem(index)}
            >
              {" "}
              {todo.value}
            </li>
            <button onClick={() => deleteTodoItem(index)}>X</button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
