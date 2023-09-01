import React, { useState } from "react";

function Button() {
  // this is the way to define state in react
  // explanation -> const ["statename", "setStatename _function"] = useState("defaultvalue")
  const [counter, setCounter] = useState(0);
  return (
    <>
      {/* 
      1. add 2 states for input fields
      2. when i change the value in an input field- how is the state changed? onChange
      3. take value from 2 fields add them and update the counter
      */}
      Num1: <input value="1" />
      <br />
      Num2: <input></input>
      <button className="btn btn-info" onClick={() => setCounter(counter + 1)}>
        Press +
      </button>
      &nbsp;
      <button className="btn btn-info" onClick={() => setCounter(counter - 1)}>
        Press -
      </button>
      <div>{counter}</div>
    </>
  );
}

export default Button;
