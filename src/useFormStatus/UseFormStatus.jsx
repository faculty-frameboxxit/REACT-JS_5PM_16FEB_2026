import React from "react";
import One from "./One";

function UseFormStatus() {
  const submit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit my Form");
  };
  return (
    <>
      <form action={submit}>
        <One/>
      </form>
    </>
  );
}

export default UseFormStatus;
