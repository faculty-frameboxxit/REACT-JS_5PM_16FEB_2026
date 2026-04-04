import React, { useEffect, useLayoutEffect } from "react";
import UserProfile from "./UserProfile";

function UseEffect() {
  useLayoutEffect(() => {
    console.log("Component Mounted");
  });
  return (
    <>
    <h1>useEffect</h1>
    <UserProfile name="Het"/>
    </>
  )
}

export default UseEffect;
