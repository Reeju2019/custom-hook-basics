import React from "react";
import useClickCount from "../../Hooks/useClickCount";
import useCountStorage from "../../Hooks/useCountStorage";
import "./style.css";

const ClickCounter = () => {
  const [count, setCount] = useCountStorage(0);
  useClickCount(count);
  return (
    <div>
      <h1>Click Counter button to Increase {count}.</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default ClickCounter;
