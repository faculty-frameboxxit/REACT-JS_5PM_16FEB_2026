// import React, { useState } from "react";

// function Login() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!values.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!values.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!values.password) {
//       newErrors.password = "Password is required";
//     } else if (values.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     return newErrors;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Form submitted successfully!");
//       console.log(values);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name</label>
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
//       </div>

//       <div>
//         <label>Email</label>
//         <br />
//         <input
//           type="text"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//       </div>

//       <div>
//         <label>Password</label>
//         <br />
//         <input
//           type="password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Login;
// import React from "react";
// import { Button, Form } from "react-bootstrap";
// // import Navebar from "./Navebar";

// function Login() {
//   return (
//     <>
//       {/* <Navebar /> */}
//       <div className="login-div border border-5 border-secondary mt-5 rounded-3 ">
//         <Form.Label>Email : </Form.Label>
//         <Form.Control
//           type="email"
//           id="inputPassword5"
//           // size="20"
//           className="input-width"
//           placeholder="Enter email"
//         />
//         <Form.Label>Password : </Form.Label>
//         <Form.Control
//           type="password"
//           id="inputPassword5"
//           // size="20"
//           className="input-width"
//           placeholder="Enter Password"
//         />
//         <div className="text-center">
//           <Button className="login-page-button ">Login</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const [cookie,setCookie] = useCookies("auth")

  const handleLogin = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user");
      // const newData = res.data.filter((data)=> )

      const user = res.data.find(
        (u) => u.email === email && u.password === password,
        (u) => u.rol === rol
      );

      if (user) {

        localStorage.setItem("user", JSON.stringify(user));

        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
      if (user.rol === 1) {
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-div border border-5 border-secondary mt-5 rounded-3">
      <Form.Label>Email :</Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <Form.Label>Password :</Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="text-center">
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
