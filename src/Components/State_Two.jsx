import React, { useState } from 'react'

function State_Two() {
    const[number,Setnumber] = useState(0)
    const [kavy,Setkavy]= useState(false)
    // let xyz = Setnumber(number+1)
    const xyz = ()=>{
        Setnumber(number+1)
    }
    const xyz_two = ()=>{
        Setnumber(number-1)
    }
    const show = ()=>{
        Setkavy(!kavy)
        console.log(kavy)
    }
  return (
    <>
    <h1>{number}</h1>
    {/* <button onClick={()=>Setnumber(number + 1)}>Number++</button> */}
    <button onClick={xyz}>Number++</button>
    <button onClick={xyz_two}>Number--</button> <br /> <br />

    <button onClick={show}>Show Text</button>
    {kavy ? "": <p>Hello Kavy</p>}
    </>
  )
}

export default State_Two