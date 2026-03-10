import React from "react";
import Hiya from "./Hiya";
import Kavy from "./Kavy";
function Demo() {
  const name = "Hiya";
  const isLoggedIn = true;
  const number = 123456878;
  return (
    <>
      <h1>Hello {isLoggedIn ? "Welcome" : "Please Login"}</h1>
      <h2>number is {number} </h2>
      {isLoggedIn ? <Hiya/>:<Kavy/> } 
    </> 
  );
}
export default Demo;
