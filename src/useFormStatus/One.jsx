import React from "react";
import { useFormStatus } from "react-dom";

function One() {
    const {panding}=useFormStatus()
    console.log(panding)
  return (
    <>
      <label htmlFor="UserName">UserName: </label>
      <input type="text" placeholder="Enter Your Name ..." name="username" />
      <br />
      <label htmlFor="Password">Password:</label>
      <input
        type="password"
        name="password"
        id=""
        placeholder="Enter Password..."
      />
      <br />
      <button>Submit</button>
    </>
  );
}

export default One;
