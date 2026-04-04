// import React, { useActionState } from 'react'

// function UseActionState() {
//     const submit = async(prev,fromdata)=>{
//         const name = fromdata.get("username")
//         const password = fromdata.get("password")
//         await new Promise((res)=> setTimeout(res,2000))
//         console.log("Submited Data ...",name,password)
//         if (name && password) {
//             return{messge:"Form submited",name,password}
//         }else{
//             return{error:"Form is not submited",name,password}
//         }
//     }
//     const [data,action,panding]=useActionState(submit,undefined)
//   return (
//     <>
//     <form action={action}>
//         <label htmlFor="UserName">UserName:  </label>
//         <input defaultValue={data?.name} type="text" placeholder='Enter Your Name ...' name='username' />
//         <br />
//         <label htmlFor="Password">Password:</label>
//         <input defaultValue={data?.password} type="password" name="password" id="" placeholder='Enter Password...' />
//         <br />
//         <button disabled={panding}>Submit</button>
//         {
//             data?.error && <span>{data?.error}</span>
//         }
//         {
//             data?.messge && <span>{data?.messge}</span>
//         }
//     </form>

//     <h3>Name: {data?.name}</h3>
//     <h3>Password: {data?.password}</h3>
//     </>
//   )
// }

// export default UseActionState

import React, { useActionState, useState } from "react";

function UseActionState() {
  const [data, action, pending] = useActionState(submitbtn, undefined);
  async function submitbtn(pre, formdata) {
    const name = formdata.get("name");
    const password = formdata.get("password");
    const email = formdata.get("email");
    await new Promise((res) => setTimeout(res, 5000));
    console.log("ergui", name, password, email);

    if (name === "") {
      return { error_name: "name is not defined", name, password, email };
    } else if (email === "") {
      return { error_email: "email is not defined", name, password, email };
    } else if (password === "") {
      return {
        error_password: "password is not defined",
        name,
        password,
        email,
      };
    } else {
      return { message: "form is submitted", name, password, email };
    }
  }
  console.log(data);

  return (
    <>
      <form action={action}>
        <label htmlFor="UseName">UseName: </label>
        <input
          type="text"
          placeholder="Enter Your Name...."
          name="name"
          defaultValue={data?.name}
        />
        {data?.error_name && (
          <span className="text-danger">{data.error_name}</span>
        )}
        <br />
        <input
          type="password"
          placeholder="Enter Your pasword...."
          name="password"
          defaultValue={data?.password}
        />
        {data?.error_password && (
          <span className="text-danger">{data.error_password}</span>
        )}

        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          defaultValue={data?.email}
        />
        {data?.error_email && (
          <span className="text-danger">{data.error_email}</span>
        )}

        <button type="submit" disabled={pending}>
          submit
        </button>
        {data?.message && <span className="text-success">{data.message}</span>}
      </form>
    </>
  );
}

export default UseActionState;
