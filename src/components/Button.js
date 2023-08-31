import React, { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(1);
  const [number1, setNumber1] = useState(1);
  return (
    <>
      <input value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
      <button className="btn btn-info" onClick={() => setCounter(counter + number1)}>
        Counter +
      </button>
      <h1>{counter}</h1>
    </>
  );
}

export default Button;
