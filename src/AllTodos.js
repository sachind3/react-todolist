import { useContext } from "react";
import TodoContext from "./context/TodoContext";
const AllTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const toggleTodo = (id) => {
    const updated = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updated);
  };
  return (
    <div className="list">
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <div key={todo.id} className="item">
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <i></i>
                </label>
                {todo.completed ? (
                  <span style={{ textDecoration: "line-through" }}>
                    {todo.text}
                  </span>
                ) : (
                  `${todo.text}`
                )}
              </div>
            );
          })
        : "No todo found"}
    </div>
  );
};

export default AllTodos;
