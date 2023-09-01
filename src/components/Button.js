import React, { useState } from "react";

// // data = state
// let index = 0;
//   console.log(index);
//   index += 1;
//   document.getElementById("mytext").innerHTML = index;

function Button() {
  function increase() {
    setCounter(counter + 1);
  }
  // this is the way to define state in react
  // explanation -> const ["statename", "setStatename _function"] = useState("defaultvalue")
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button className="btn btn-info" onClick={increase}>
        Press this button{" "}
      </button>
      <div>{counter}</div>
    </>
  );
}

export default Button;
