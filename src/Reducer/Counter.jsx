import React, { useId, useReducer } from "react";
import Reducer, { initialState } from "./Reducer";

function Counter() {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const userID = useId()
    const emailID = useId()
    console.log(userID)
    console.log(state)
    console.log(emailID)
    
  return (
    <div className="counter">
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <label htmlFor="userID">UserName</label>
      <input type="text" name="" id={userID} />
      <label htmlFor="emailID">emailID</label>
      <input type="text" name="" id={emailID} />
      
    </div>
  );
}

export default Counter;
