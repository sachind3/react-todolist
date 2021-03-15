import { useState } from "react";
import Nav from "./Nav";
import AllTodos from "./AllTodos";
import ActiveTodos from "./ActiveTodos";
import CompletedTodos from "./CompletedTodos";
import AddTodo from "./AddTodo";
import TodoState from "./context/TodoState";
const App = () => {
  const [category, setCategory] = useState("All");
  return (
    <TodoState>
      <div className="wrapper">
        <Nav setCategory={setCategory} />
        {category === "All" && (
          <>
            <AddTodo />
            <AllTodos />
          </>
        )}
        {category === "Active" && (
          <>
            <AddTodo />
            <ActiveTodos />
          </>
        )}
        {category === "Completed" && <CompletedTodos />}
      </div>
    </TodoState>
  );
};

export default App;
