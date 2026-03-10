import React, { useState } from "react";

function New_login() {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState({});

  const submitData = () => {
    // console.log("first")
    console.table(username, email, password);


   const validationErrors = {};
    if (username === "") {
       validationErrors.username = "Enter your Name";
    }
    if (email === "") {
      validationErrors.email = "Enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
     validationErrors.email = "Email is invalid";
    }
    if (password === "") {
      validationErrors.password = "Enter your password";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.table({ username, email, password });
      setError("")
      alert("Form Submitted Successfully");
      setUsername("")
      setemail("")
      setpassword("")
    }
  };

  return (
    <>
      <form action="#" onSubmit={submitData}>
        <label htmlFor="UserNAme">UserNAme</label>
        <input
          type="text"
          name=""
          id=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username && (
          <p style={{ color: "red", margin: 0 }}>{error.username}</p>
        )}
        <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name=""
          id=""
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
         {error.email && (
          <p style={{ color: "red", margin: 0 }}>{error.email}</p>
        )}
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {error.password && (
          <p style={{ color: "red", margin: 0 }}>{error.password}</p>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default New_login;
