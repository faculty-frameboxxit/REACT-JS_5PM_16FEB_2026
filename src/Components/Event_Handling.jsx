import React, { useState } from 'react'

function Event_Handling() {
  const [number,Setnumber]=useState(0)
  const [input, Setinput] = useState([])
  const [newinput, Setnewinput] = useState("")
  function handleClick() {
    Setnumber(number + 1)
  }
  function handleClick_Two() {
    Setnumber(number - 1)
  }
  function newInput() {
   Setnewinput(input)
    
  }
  return (
    <>
    <div>Event_Handling</div>
    <p>{number}</p>
    <button onClick={handleClick}>New_Number +Ve</button>
    <button onClick={handleClick_Two}>New_Number -Ve </button>

    <hr />
    <input type="text"
    placeholder='Enter Name'
    value={input}
    onChange={(w)=> Setinput(w.target.value)}
    />
    <p>{newinput}</p>
    <button onClick={newInput}>Input Chnage</button>
    </>
  )
}

export default Event_Handling