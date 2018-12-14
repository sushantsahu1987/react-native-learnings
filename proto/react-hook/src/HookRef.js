import React, { useRef, useState, useEffect } from "react";

function HookRef() {
  const inputRef = useRef();
  const [val, setVal] = useState("");

  useEffect(
    () => {
      inputRef.current.focus();
    },

    [inputRef]
  );

  return (
    <div>
      <p> This is an example of a hook reference ?</p>
      <input
        ref={inputRef}
        className="hook_input"
        type="text"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
    </div>
  );
}

export default HookRef;
