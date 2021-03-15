import { useState } from "react";

const Nav = (props) => {
  const [activeClass, setActiveClass] = useState("All");
  return (
    <nav>
      <h1>#todo</h1>
      <ul>
        {["All", "Active", "Completed"].map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  props.setCategory(item);
                  setActiveClass(item);
                }}
                className={activeClass === item ? "active " : null}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
