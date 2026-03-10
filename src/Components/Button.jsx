import React from "react";

const Button = ({name}) => {
  console.log("label")
  const handleClick = () => console.log("Clicked");

  return <>
  <button onClick={handleClick}>{name}</button>
  {/* <h2>{name}</h2> */}
  </>
};

export default Button;


// import React from 'react'

// function Button() {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button

