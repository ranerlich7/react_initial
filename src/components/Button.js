import React, { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <button className="btn btn-info" onClick={() => setCounter(counter + 1)}>
        Counter +
      </button>
      <h1>{counter}</h1>
    </>
  );
}

export default Button;
