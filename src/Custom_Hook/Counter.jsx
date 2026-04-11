import React from 'react'
import useCounter from './useCounter';

function Counter() {
     const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter