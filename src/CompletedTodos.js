import { useContext } from "react";
import TodoContext from "./context/TodoContext";
const CompletedTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const activeTodos = todos.filter((todo) => todo.completed === true);
  const toggleTodo = (id) => {
    const updated = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updated);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const deleteAll = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };
  return (
    <>
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
                  <span style={{ textDecoration: "line-through" }}>
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="deleteSingleTodo"
                  >
                    <span className="material-icons-outlined">delete</span>
                  </button>
                </div>
              );
            })
          : "No completed todos"}
      </div>
      <div className="todoFooter">
        <button onClick={deleteAll} className="deleteAll">
          <span className="material-icons-outlined">delete</span> delete all
        </button>
      </div>
    </>
  );
};

export default CompletedTodos;
