import React, { useState } from "react";
import Child01 from "./child01";
import Child02 from "./child02";

function Lift() {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Hello </h1>
      <Child01 name={setInput} />
      <hr />
      <Child02 user={input} />
    </>
  );
}

export default Lift;
