import React, { useState } from "react";

function Button() {
  // this is the way to define state in react
  // explanation -> const ["statename", "setStatename _function"] = useState("defaultvalue")
  const [counter, setCounter] = useState(0);
  return (
    <>
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
