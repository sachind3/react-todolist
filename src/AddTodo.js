import { useContext, useState } from "react";
import TodoContext from "./context/TodoContext";
const AddTodo = () => {
  const { setTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      const newTodo = {
        id: new Date().getTime().toString(),
        completed: false,
        text: todo,
      };
      setTodos((prev) => {
        return [...prev, newTodo];
      });
      setTodo("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="form-control"
          placeholder="Add details"
        />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
