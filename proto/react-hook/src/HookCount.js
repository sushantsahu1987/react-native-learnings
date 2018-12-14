import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HookCount(props) {
  const [name, setName] = useState(() => {
    return "Sushant";
  });
  const [count, updatecount] = useState(0);

  useEffect(
    () => {
      console.log("use effect");
      return () => {
        console.log("clear use effect, called before every rerender ");
      };
    },
    [count]
  );

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  const onUpdate = () => {
    updatecount(count + 1);
  };

  const onReset = () => {
    console.log("on reset");
    updatecount(0);
  };

  return (
    <div>
      <p>
        {" "}
        What is the count {name} ? {count}
      </p>
      <div>
        <button className="hook_button" onClick={onUpdate}>
          Update Count
        </button>

        <button className="hook_button" onClick={onReset}>
          Reset Count
        </button>

        <Link className="hook_button" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default HookCount;
