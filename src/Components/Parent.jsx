import React, { useRef } from "react";
import Child from "./Child";

function Parent() {
  const ref = useRef();
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={()=>ref.current.hello()}>add</button>
      <Child ref={ref}/>
    </div>
  );
}

export default Parent;
