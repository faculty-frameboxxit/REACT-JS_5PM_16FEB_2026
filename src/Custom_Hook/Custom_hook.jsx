// import React from 'react'
// import useToggle from './useToggle'

// function Custom_hook() {
//     const [data,toggle] = useToggle(true)
//     console.log("data-----",data)
//   return (
//     <>
//     <button onClick={toggle}>Toggle </button>
//     <button onClick={()=>toggle(false)}>Show</button>
//     <button onClick={()=>toggle(true)}>Hide</button>
//     {
//         data ? <h1>Toggle Data</h1> : null
//     }
//     </>
//   )
// }

// export default Custom_hook



import React, { useState } from 'react'
import useToggle from './useToggle'

function Custom_hook() {
    const [toggle,item]=useToggle(true)
  return (
    <>
    {/* <button onClick={item}>Toggle</button>
    <button onClick={()=>item(true)}>Show</button>
    <button onClick={()=>item(false)}>Hide</button> */}
    <button onClick={item}>Toggle</button>
    <button onClick={()=>item(true)}>Show</button>
    <button onClick={()=>item(false)}>Hide</button>
    {
      toggle?<h1>Hello Hiya</h1> : null
    }
   
    {/* {
        toggle? <h1>Toggle Hello</h1> : null
    } */}
    </>
  )
}

export default Custom_hook
























