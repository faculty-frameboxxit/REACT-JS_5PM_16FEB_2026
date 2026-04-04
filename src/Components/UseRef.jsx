import React, { useRef, useState } from "react";

function UseRef() {
  // const [text,setText] = useState("")
  // const textCopy = useRef(null)
  // function copy() {
  //     console.log(text)
  //     window.navigator.clipboard.writeText(text)
  //     textCopy.current.select()
  // }
  const [count, setCount] = useState(0);
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = count;
  }, [count]);

  return (
    <>
      {/* <input
        type="text"
        ref={textCopy}
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

export default UseRef;
