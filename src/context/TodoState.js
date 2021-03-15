import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
