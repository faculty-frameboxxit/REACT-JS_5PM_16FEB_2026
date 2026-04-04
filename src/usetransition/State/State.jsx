// import React, { useState } from 'react'
// import { useTransition } from 'react'

// function State() {
//     // const [loding,setLoding]=useState(false)
//     const [loding,setLoding]=useTransition(false)
//     // const loder = async ()=>{
//     //     setLoding(true)

//     //     await new Promise (res=>setTimeout(res,2000))
//     //     setLoding(false)
//     // }
//     const loder =  ()=>{

//         setLoding(async()=>{

//             await new Promise (res=>setTimeout(res,2000))
//         })

//     }
//   return (
//     <>
//     <h1>Hello </h1>
//     {
//         loding ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
//     }
//     <button disabled={loding} onClick={loder}>Submit</button>
//     </>
//   )
// }

// export default State

import React, { useState, useTransition } from "react";

function State() {
  // const [loding,setLoding]=useState(false)
  const [loding, setLoding] = useTransition();
  const add = () => {
    // setLoding(true)

    setLoding(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });

    // setLoding(false)
  };
  return (
    <>
      <h1>Add Data</h1>
      {
        loding ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
      }
      <button disabled={loding} onClick={add}>
        Submit
      </button>
    </>
  );
}

export default State;
