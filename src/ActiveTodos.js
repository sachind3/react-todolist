import { useContext } from "react";
import TodoContext from "./context/TodoContext";
const ActiveTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const activeTodos = todos.filter((todo) => todo.completed === false);
  const toggleTodo = (id) => {
    const updated = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updated);
  };
  return (
    <div className="list">
      {activeTodos.length > 0
        ? activeTodos.map((todo) => {
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
                {todo.text}
              </div>
            );
          })
        : "No active todos"}
    </div>
  );
};

export default ActiveTodos;
