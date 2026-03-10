import React, { useState } from 'react'

function Page() {
  const [username, Setusername] = useState("")
  const [email, Setemail] = useState("")
  const [password, Setpassword] = useState("")
  const [error, Seterror] = useState("")
  function submitData(e) {
    e.preventDefault();
    console.log(username)
    const errorValid = {}
    if (username === "") {
      {errorValid.username = "Enter your UserName"}
    }
    if (email === "") {
       errorValid.email = "Enter your Email"
    } else if(!/\S+@\S+\.\S+/.test(email)){
      errorValid.email = "Enter your valid Email"
    }
    if (password === "") {
      errorValid.password = "Enter your Password"
    }else if(password.length < 6){
      errorValid.password = "Enter your valid Password"
    }
    Seterror(errorValid)
    // alert("Form submited")
    // Object(errorValid.value === "")
    if (Object.keys(errorValid).length === 0) {
      alert("Form submitted successfully!");
      Setusername("")
      Setpassword("")
      Setemail("")
    }
  }
  return (
   <>
   <h1>Login Page</h1>
   <form action="#" onSubmit={submitData}>
    <label htmlFor="UserName">UserName: </label>
    <input type="text" value={username} onChange={(e)=> Setusername(e.target.value)} /> <br />
    {error.username && <p style={{color:"red"}}>{error.username}</p>}
    <label htmlFor="Email">Email: </label>
    <input type="email" value={email} onChange={(e)=> Setemail(e.target.value)} /> <br />
    {error.email && <p style={{color:"red"}}>{error.email}</p>}
    <label htmlFor="Password">Password: </label>
    <input type="password" value={password} onChange={(e)=> Setpassword(e.target.value)} /> <br />
    {error.password && <p style={{color:"red"}}>{error.password}</p>}
    <button type="submit">submit</button>
   </form>
   </> 
  )
}

export default Page