import React from 'react'
export const initialState = { count: 0 };

function Reducer(state, action) {
 switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default Reducer