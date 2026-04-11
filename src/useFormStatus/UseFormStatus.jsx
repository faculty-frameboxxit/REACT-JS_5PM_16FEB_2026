import React from "react";
import { useFormStatus } from "react-dom";
// import One from "./One";

function UseFormStatus() {
  const submit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit my Form");
  };
  function One() {
    const {pending} = useFormStatus()
    console.log(pending)
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
        <button disabled={pending}>Submit</button>
      </>
    );
  }
  return (
    <>
      <form action={submit}>
        <One />
      </form>
    </>
  );
}

export default UseFormStatus;
// import React from "react";
// import { useFormStatus } from "react-dom";

// function UseFormStatus() {
//   const { pending } = useFormStatus();
//   console.log(pending)
//   const add = async () => {
//     await new Promise((res) => setTimeout(res, 2000));
//     console.log("first");
//   };
  // function List() {
  //   console.log(pending)
  //   return (
  //     <>
  //       <input type="text" placeholder="Enter your name" /> <br />
  //       <br />
  //       <input type="password" placeholder="Enter your password" /> <br />
  //       <br />
  //       <button disabled={pending}>Submit</button>
  //     </>
  //   );
  // }
//   return (
//     <>
//       <form action={add}>
//         <input type="text" placeholder="Enter your name" /> <br />
//         <br />
//         <input type="password" placeholder="Enter your password" /> <br />
//         <br />
//         <button disabled={pending}>Submit</button>
//       </form>
//     </>
//   );
// }

// export default UseFormStatus;
