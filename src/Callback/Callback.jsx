// import React, { useCallback, useState } from 'react'
// import { Button } from 'react-bootstrap'
// import Demo from './Demo'

// function Callback() {
//     const[count,setCount]=useState(0)
//     const add = useCallback(()=> {
//         setCount(count+1)
//     },[])
//   return (
//     <>
//     <Button onClick={add}>Increment</Button>
//     <p>{count}</p>
//     <hr />
//     <Demo name="Submit" onClick={add}/>
//     </>
//   )
// }

// export default Callback

import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import Demo from "./Demo";

function Callback() {
  const [count, setCount] = useState(0);
  const add = useCallback(() => {
    setCount(count + 1);
  },[count]);

  return (
    <>
      <Button onClick={add}>Increment</Button>
      <p>{count}</p>
      <hr />
      <Demo name="Add" data={add}/>
    </>
  );
}

export default Callback;
