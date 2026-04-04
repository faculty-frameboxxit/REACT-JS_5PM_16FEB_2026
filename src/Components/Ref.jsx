import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const [count, setCount] = useState(0);
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = count;
  }, [count]);
  // const [text, setText] = useState("");
  // const copydata = useRef("");
  // useEffect(()=>(
  //     console.log("first")
  // ),[text])
  function copy() {
    console.log(text);
    window.navigator.clipboard.writeText(text);
    // copydata.current.select(text)
    copydata.current.focus();
  }
  return (
    <>
      {/* <label htmlFor="name">UserName :</label>
      <input type="text" name="" id="name" /> */}
      {/* <input
        type="text"
        ref={copydata}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={copy}>Copy</button> */}
      <div>
        <h2>Current: {count}</h2>
        <h3>Previous: {prevRef.current}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
}

export default Ref;
