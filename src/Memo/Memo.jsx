// import React, { useMemo, useState } from "react";
// import { Button } from "react-bootstrap";

// function Memo() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState(0);
//   function add(num) {
//     console.log("first");
//     for (let index = 0; index <= 1000000000; index++) {}
//     return num * 2;
//   }
//   // let name = add(5);

//   const memo = useMemo(()=>add(input),[input] )
//   return (
//     <>
//       <Button onClick={() => setCount(count + 1)}>Increment</Button>
//       <p>{count}</p>
//       <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} />
//       <p>{memo}</p>
//     </>
//   );
// }

// export default Memo;
import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

function Memo() {
  const [count,setCount]=useState(0);
  const [input,setInput]=useState(0);
  
  function add(num) {
    console.log("first")
    for (let index = 0; index <=1000000000; index++) {}

    return num * 5
  }
  // let data = add(20)

  let data = useMemo(()=> add(input),[input])
  return (
   <>
   <Button onClick={(e)=>setCount(count + 1)}>Increment</Button>
   <p>{count}</p>
   <hr />
   <input type="number" onChange={(e)=>setInput(e.target.value)} />
   <p>{data}</p>
   </>
  )
}

export default Memo