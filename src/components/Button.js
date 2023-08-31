import React from "react";

let index = 0;

function increase() {
  console.log(index);
  index += 1;
}

function Button() {
  return (
    <>
      <button className="btn btn-info" onClick={increase}>
        Press this button{" "}
      </button>
    </>
  );
}

export default Button;
