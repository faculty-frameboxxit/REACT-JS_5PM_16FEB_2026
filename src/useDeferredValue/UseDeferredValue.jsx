import React, { useState } from 'react'
import List from './List'

function UseDeferredValue() {
    const [input,setInput] = useState("")
    function chnage(e) {
        setInput(e.target.value)
    }
  return (
   <>
   <input type="text" value={input} onChange={chnage} />
   <List input={input}/>
   </>
  )
}

export default UseDeferredValue