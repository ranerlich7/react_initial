import React from "react";

let index = 0;
const products = ["Toy", "Cart", ""];

function increase() {
  console.log(index);
  index += 1;
}

function Button() {
  return (
    <>
      <button onClick={increase}>Press this button </button>
    </>
  );
}

export default Button;
