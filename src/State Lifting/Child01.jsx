import React, { useState } from 'react'

function Child01(props) {

  return (
    <div>
        <h1>child01</h1>
        <input type="text"
        placeholder='Enter Name.....'
        onChange={(e)=>props.name(e.target.value)} />
        {/* <p>{input}</p> */}
    </div>
  )
}

export default Child01